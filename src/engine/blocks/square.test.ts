import Point from '../grid/point';
import { DoubleSquaredBlock, TrippleSquaredBlock } from './square';

test('test double squared block', () => {
  const b = new DoubleSquaredBlock();
  const cells = b.getCells(new Point(1, 1));
  expect(cells).toStrictEqual([
    new Point(1, 1), new Point(1, 2),
    new Point(2, 1), new Point(2, 2),
  ]);
});

test('test tripple squared block', () => {
  const b = new TrippleSquaredBlock();
  const cells = b.getCells(new Point(1, 1));
  expect(cells).toStrictEqual([
    new Point(1, 1), new Point(1, 2), new Point(1, 3),
    new Point(2, 1), new Point(2, 2), new Point(2, 3),
    new Point(3, 1), new Point(3, 2), new Point(3, 3),
  ]);
});
