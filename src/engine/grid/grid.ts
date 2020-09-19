import CellMap from './model';
import Point from './point';
import { posToCell } from './utils';

// TODO: this dimensions are hard coded for now
// we rely on 9x9 in the sub squares
const dimWidth = 9;
const dimHeight = 9;

export default class Grid {
  protected width: number;

  protected height: number;

  private cells: CellMap;

  constructor(width: number, height: number) {
    if (width !== dimWidth || height !== dimHeight) {
      throw new Error(`we only support ${dimWidth}x${dimHeight} atm`);
    }
    this.width = width;
    this.height = height;
    this.cells = new CellMap();
  }

  static fromString(width: number, height: number, data: string): Grid {
    const grid = new Grid(width, height);
    const values = data.replace(/[^OX]/g, '');
    if (values.length > width * height) {
      throw new Error('Invalid Shape');
    }
    for (let index = 0; index < values.length; index++) {
      const element = values.charAt(index);
      if (element === 'X') {
        const cell = posToCell(index, width, height);
        grid.cells.set(cell, 1);
      }
    }
    return grid;
  }

  static isEqual(grid1: Grid, grid2: Grid): boolean {
    return (grid1.width === grid2.width)
      && (grid1.height === grid2.height)
      && (grid1.cells.hasSameValuesAs(grid2.cells))
      && (grid2.cells.hasSameValuesAs(grid1.cells));
  }

  toString(): string {
    let result = '';
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        result += this.cells.get(new Point(x, y)) ? 'X' : 'O';
      }
      result += '\n';
    }
    return result;
  }

  set(p: Point, value: 0 | 1): void {
    if (p.x < 0 || p.x >= this.width || p.y < 0 || p.y >= this.height) {
      throw new Error('Invalid dimension');
    }
    if (value !== 0 && value !== 1) {
      throw new Error('Invalid value');
    }
    this.cells.set(p, value);
  }

  isSet(p: Point): boolean {
    if (p.x < 0 || p.x >= this.width || p.y < 0 || p.y >= this.height) {
      throw new Error('Invalid dimension');
    }
    return this.cells.get(p) === 1;
  }

  private getFullLineFields(): Point[] {
    const result: Point[] = [];
    for (let y = 0; y < this.height; y++) {
      const filledCells = [];
      for (let x = 0; x < this.width; x++) {
        if (this.cells.get(new Point(x, y))) filledCells.push([x, y]);
      }
      // @ts-ignore
      if (filledCells.length === this.width) result.push(...filledCells);
    }
    return result;
  }

  private getFullColumnFields(): Point[] {
    const result: Point[] = [];
    for (let x = 0; x < this.width; x++) {
      const filledCells = [];
      for (let y = 0; y < this.height; y++) {
        if (this.cells.get(new Point(x, y))) filledCells.push([x, y]);
      }
      // @ts-ignore
      if (filledCells.length === this.height) result.push(...filledCells);
    }
    return result;
  }

  // FIXME: this is the only reason why dimWidth and dimHeight are restricted
  private getFullSquareFields(xBlock: number, yBlock: number): Point[] {
    const result: Point[] = [];
    for (let x = xBlock * 3; x < xBlock * 3 + 3; x++) {
      for (let y = yBlock * 3; y < yBlock * 3 + 3; y++) {
        const p = new Point(x, y);
        if (this.cells.get(p)) result.push(p);
      }
    }
    return result.length === 9 ? result : [];
  }

  private getFullSquaresFields(): Point[] {
    const result: Point[] = [];
    for (let xBlock = 0; xBlock < 3; xBlock++) {
      for (let yBlock = 0; yBlock < 3; yBlock++) {
        result.push(...this.getFullSquareFields(xBlock, yBlock));
      }
    }
    return result;
  }

  clear(): void {
    const rowFieldsToClear: Point[] = this.getFullLineFields();
    const columnFieldsToClear: Point[] = this.getFullColumnFields();
    const squareFieldsToClear: Point[] = this.getFullSquaresFields();

    const fieldsToClear = [];
    if (rowFieldsToClear.length > 0) fieldsToClear.push(...rowFieldsToClear);
    if (columnFieldsToClear.length > 0) fieldsToClear.push(...columnFieldsToClear);
    if (squareFieldsToClear.length > 0) fieldsToClear.push(...squareFieldsToClear);

    for (let index = 0; index < fieldsToClear.length; index++) {
      const cell = fieldsToClear[index];
      this.set(cell, 0);
    }
  }
}
