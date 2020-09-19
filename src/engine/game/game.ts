import BaseBlock from '../blocks/base';
import Grid from '../grid';
import Point from '../grid/point';

export default class Game {
  private grid: Grid;

  constructor(private width: number, private height: number) {
    this.grid = new Grid(width, height);
  }

  place(p: Point, block: BaseBlock): void {
    block.place(this.grid, p);
    this.clearGrid();
  }

  clearGrid(): void {
    this.grid.clear();
  }

  toString(): string {
    return this.grid.toString();
  }
}
