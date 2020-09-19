import Point from '../grid/point';
import BaseBlock from './base';

/**
 * Shape:
 *  'OXO'
 *  'xxx'
 */
export class UpFacingTBlock extends BaseBlock {
  // eslint-disable-next-line class-methods-use-this
  getCells(p: Point): Point[] {
    return [
      new Point(p.x, p.y),
      new Point(p.x, p.y + 1),
      new Point(p.x - 1, p.y + 1),
      new Point(p.x + 1, p.y + 1),
    ];
  }
}

/**
 * Shape:
 *  'xxx'
 *  'OXO'
 */
export class DownFacingTBlock extends BaseBlock {
  // eslint-disable-next-line class-methods-use-this
  getCells(p: Point): Point[] {
    return [
      new Point(p.x, p.y),
      new Point(p.x - 1, p.y - 1),
      new Point(p.x, p.y - 1),
      new Point(p.x + 1, p.y - 1),
    ];
  }
}

/**
 * Shape:
 *  'xO'
 *  'xX'
 *  'xO'
 */
export class RightFacingTBlock extends BaseBlock {
  // eslint-disable-next-line class-methods-use-this
  getCells(p: Point): Point[] {
    return [
      new Point(p.x, p.y),
      new Point(p.x - 1, p.y - 1),
      new Point(p.x - 1, p.y),
      new Point(p.x - 1, p.y + 1),
    ];
  }
}

/**
 * Shape:
 *  'Ox'
 *  'Xx'
 *  'Ox'
 */
export class LeftFacingTBlock extends BaseBlock {
  // eslint-disable-next-line class-methods-use-this
  getCells(p: Point): Point[] {
    return [
      new Point(p.x, p.y),
      new Point(p.x + 1, p.y - 1),
      new Point(p.x + 1, p.y),
      new Point(p.x + 1, p.y + 1),
    ];
  }
}
