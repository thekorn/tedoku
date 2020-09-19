import Point from '../grid/point';
import { DoubleHorizontalBlock, DoubleVerticalBlock, SingleBlock } from './line';

test('test single block', () => {
  const b = new SingleBlock();
  const cells = b.getCells(new Point(1, 1));
  expect(cells).toStrictEqual([new Point(1, 1)]);
});

test('test double horizontal block', () => {
  const b = new DoubleHorizontalBlock();
  const cells = b.getCells(new Point(1, 1));
  expect(cells).toStrictEqual([new Point(1, 1), new Point(2, 1)]);
});

test('test double vertical block', () => {
  const b = new DoubleVerticalBlock();
  const cells = b.getCells(new Point(1, 1));
  expect(cells).toStrictEqual([
    new Point(1, 1),
    new Point(1, 2),
  ]);
});
