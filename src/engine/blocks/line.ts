import Point from '../grid/point';
import BaseBlock from './base';

/**
 * Shape:
 *  'X'
 */
export class SingleBlock extends BaseBlock {
  // eslint-disable-next-line class-methods-use-this
  getCells(p: Point): Point[] {
    return [
      new Point(p.x, p.y),
    ];
  }
}

/**
 * Shape:
 *  'Xx'
 */
export class DoubleHorizontalBlock extends BaseBlock {
  // eslint-disable-next-line class-methods-use-this
  getCells(p: Point): Point[] {
    return [
      new Point(p.x, p.y),
      new Point(p.x + 1, p.y),
    ];
  }
}

/**
 * Shape:
 *  'Xxx'
 */
export class TrippleHorizontalBlock extends BaseBlock {
  // eslint-disable-next-line class-methods-use-this
  getCells(p: Point): Point[] {
    return [
      new Point(p.x, p.y),
      new Point(p.x + 1, p.y),
      new Point(p.x + 2, p.y),
    ];
  }
}

/**
 * Shape:
 *  'Xxxx'
 */
export class QuadrupleHorizontalBlock extends BaseBlock {
  // eslint-disable-next-line class-methods-use-this
  getCells(p: Point): Point[] {
    return [
      new Point(p.x, p.y),
      new Point(p.x + 1, p.y),
      new Point(p.x + 2, p.y),
      new Point(p.x + 3, p.y),
    ];
  }
}

/**
 * Shape:
 *  'Xxxxx'
 */
export class QuintupleHorizontalBlock extends BaseBlock {
  // eslint-disable-next-line class-methods-use-this
  getCells(p: Point): Point[] {
    return [
      new Point(p.x, p.y),
      new Point(p.x + 1, p.y),
      new Point(p.x + 2, p.y),
      new Point(p.x + 3, p.y),
      new Point(p.x + 4, p.y),
    ];
  }
}

/**
 * Shape:
 *  'X'
 *  'x'
 */
export class DoubleVerticalBlock extends BaseBlock {
  // eslint-disable-next-line class-methods-use-this
  getCells(p: Point): Point[] {
    return [
      new Point(p.x, p.y),
      new Point(p.x, p.y + 1),
    ];
  }
}

/**
 * Shape:
 *  'X'
 *  'x'
 *  'x'
 */
export class TrippleVerticalBlock extends BaseBlock {
  // eslint-disable-next-line class-methods-use-this
  getCells(p: Point): Point[] {
    return [
      new Point(p.x, p.y),
      new Point(p.x, p.y + 1),
      new Point(p.x, p.y + 2),
    ];
  }
}

/**
 * Shape:
 *  'X'
 *  'x'
 *  'x'
 *  'x'
 */
export class QuadrupleVerticalBlock extends BaseBlock {
  // eslint-disable-next-line class-methods-use-this
  getCells(p: Point): Point[] {
    return [
      new Point(p.x, p.y),
      new Point(p.x, p.y + 1),
      new Point(p.x, p.y + 2),
      new Point(p.x, p.y + 3),
    ];
  }
}

/**
 * Shape:
 *  'X'
 *  'x'
 *  'x'
 *  'x'
 *  'x'
 */
export class QuintupleVerticalBlock extends BaseBlock {
  // eslint-disable-next-line class-methods-use-this
  getCells(p: Point): Point[] {
    return [
      new Point(p.x, p.y),
      new Point(p.x, p.y + 1),
      new Point(p.x, p.y + 2),
      new Point(p.x, p.y + 3),
      new Point(p.x, p.y + 4),
    ];
  }
}
