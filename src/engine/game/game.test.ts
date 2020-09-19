import {
  DoubleHorizontalBlock,
  QuadrupleHorizontalBlock,
  QuadrupleVerticalBlock,
  SingleBlock,
  TrippleHorizontalBlock,
  TrippleVerticalBlock,
  TrippleSquaredBlock,
} from '../blocks';
import Point from '../grid/point';
import { sanitize } from '../grid/utils';
import Game from './game';

test('test adding single blocks', () => {
  const expected = sanitize(`
    OOXOOOOOO
    OXOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
  `);
  const game = new Game(9, 9);
  game.place(new Point(1, 1), new SingleBlock());
  game.place(new Point(2, 0), new SingleBlock());
  const alreadyThere = () => {
    game.place(new Point(1, 1), new SingleBlock());
  };
  expect(alreadyThere).toThrowError('Cannot place block');
  const outOfBound = () => {
    game.place(new Point(10, 10), new SingleBlock());
  };
  expect(outOfBound).toThrowError('Invalid dimension');
  expect(sanitize(game.toString())).toBe(expected);
});

test('test adding single blocks in corners', () => {
  const expected = sanitize(`
    XOOOOOOOX
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    XOOOOOOOX
  `);
  const game = new Game(9, 9);
  game.place(new Point(0, 0), new SingleBlock());
  game.place(new Point(8, 0), new SingleBlock());
  game.place(new Point(0, 8), new SingleBlock());
  game.place(new Point(8, 8), new SingleBlock());
  expect(sanitize(game.toString())).toBe(expected);
});

test('test adding tripple horizontal blocks', () => {
  const expected = sanitize(`
    OOOOOOOOO
    OXXXOXXXO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
  `);
  const game = new Game(9, 9);
  game.place(new Point(1, 1), new TrippleHorizontalBlock());
  game.place(new Point(5, 1), new TrippleHorizontalBlock());
  const alreadyThere = () => {
    game.place(new Point(1, 1), new SingleBlock());
  };
  expect(alreadyThere).toThrowError('Cannot place block');
  const outOfBound = () => {
    game.place(new Point(8, 0), new TrippleHorizontalBlock());
  };
  expect(outOfBound).toThrowError('Invalid dimension');
  expect(sanitize(game.toString())).toBe(expected);
});

test('test full line', () => {
  const expectedBefore = sanitize(`
    OOOOOOOOO
    XXXXXXXXO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
  `);
  const game = new Game(9, 9);
  game.place(new Point(0, 1), new QuadrupleHorizontalBlock());
  game.place(new Point(4, 1), new QuadrupleHorizontalBlock());

  expect(sanitize(game.toString())).toBe(expectedBefore);

  const expectedAfter = sanitize(`
    OOOOOOOOX
    OOOOOOOOO
    OOOOOOOOX
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
  `);
  game.place(new Point(8, 0), new TrippleVerticalBlock());
  expect(sanitize(game.toString())).toBe(expectedAfter);
});

test('test full line and row', () => {
  const expectedBefore = sanitize(`
    OOOOOOOOX
    XXXXXXXXO
    OOOOOOOOX
    OOOOOOOOX
    OOOOOOOOX
    OOOOOOOOX
    OOOOOOOOX
    OOOOOOOOX
    XXXOOOOOX
  `);
  const game = new Game(9, 9);
  game.place(new Point(0, 1), new QuadrupleHorizontalBlock());
  game.place(new Point(4, 1), new QuadrupleHorizontalBlock());
  game.place(new Point(8, 0), new SingleBlock());
  game.place(new Point(8, 2), new TrippleVerticalBlock());
  game.place(new Point(8, 5), new QuadrupleVerticalBlock());
  game.place(new Point(0, 8), new TrippleHorizontalBlock());
  expect(sanitize(game.toString())).toBe(expectedBefore);

  const expectedAfter = sanitize(`
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    XXXOOOOOO
  `);
  game.place(new Point(8, 1), new SingleBlock());
  expect(sanitize(game.toString())).toBe(expectedAfter);
});

test('test full square, line and row', () => {
  const expectedBefore = sanitize(`
    OOOOOOOOO
    XXXXXXOOO
    OOOOOOOOO
    OOOOOOOOX
    OOOOOOOOX
    OOOOOOOOX
    OOOOOOOOX
    OOOOOOOOX
    XXXOOOOOX
  `);
  const game = new Game(9, 9);
  game.place(new Point(0, 1), new QuadrupleHorizontalBlock());
  game.place(new Point(4, 1), new DoubleHorizontalBlock());
  game.place(new Point(8, 3), new TrippleVerticalBlock());
  game.place(new Point(8, 6), new TrippleVerticalBlock());
  game.place(new Point(0, 8), new TrippleHorizontalBlock());
  expect(sanitize(game.toString())).toBe(expectedBefore);

  const expectedAfter = sanitize(`
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    XXXOOOOOO
  `);
  game.place(new Point(6, 0), new TrippleSquaredBlock());
  expect(sanitize(game.toString())).toBe(expectedAfter);
});
