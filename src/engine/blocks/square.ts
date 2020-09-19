import Point from '../grid/point';
import BaseBlock from './base';

/**
 * Shape:
 *  'Xx'
 *  'xx'
 */
export class DoubleSquaredBlock extends BaseBlock {
  // eslint-disable-next-line class-methods-use-this
  getCells(p: Point): Point[] {
    return [
      new Point(p.x, p.y),
      new Point(p.x, p.y + 1),
      new Point(p.x + 1, p.y),
      new Point(p.x + 1, p.y + 1),
    ];
  }
}

/**
 * Shape:
 *  'Xxx'
 *  'xxx'
 *  'xxx'
 */
export class TrippleSquaredBlock extends BaseBlock {
  // eslint-disable-next-line class-methods-use-this
  getCells(p: Point): Point[] {
    return [
      new Point(p.x, p.y),
      new Point(p.x, p.y + 1),
      new Point(p.x, p.y + 2),
      new Point(p.x + 1, p.y),
      new Point(p.x + 1, p.y + 1),
      new Point(p.x + 1, p.y + 2),
      new Point(p.x + 2, p.y),
      new Point(p.x + 2, p.y + 1),
      new Point(p.x + 2, p.y + 2),
    ];
  }
}
