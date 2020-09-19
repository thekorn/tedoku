import Grid from '../grid';
import Point from '../grid/point';

export default abstract class BaseBlock {
  abstract getCells(p: Point): Point[];

  canBePlaced(grid: Grid, p: Point): boolean {
    const cells = this.getCells(p);
    for (let index = 0; index < cells.length; index++) {
      if (grid.isSet(cells[index])) {
        return false;
      }
    }
    return true;
  }

  place(grid: Grid, p: Point): void {
    if (!this.canBePlaced(grid, p)) {
      throw new Error('Cannot place block');
    }
    const cells = this.getCells(p);
    for (let index = 0; index < cells.length; index++) {
      if (!grid.isSet(cells[index])) {
        grid.set(cells[index], 1);
      } else {
        throw new Error('Cannot place block');
      }
    }
  }
}
