import Grid from './grid';
import Point from './point';
import { sanitize } from './utils';

test('initialize an empty grid', () => {
  const expected = sanitize(`
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
  `);
  const g = new Grid(9, 9);
  const s = g.toString();
  expect(sanitize(s)).toBe(expected);
});

test('initialize empty grid from string', () => {
  const data = `
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
  `;
  const g = Grid.fromString(9, 9, data);
  const s = g.toString();
  expect(sanitize(s)).toBe('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO');
  expect(Grid.isEqual(g, new Grid(9, 9))).toBeTruthy();
});

test('initialize grid from string', () => {
  const data = `
    OOOOOOXXO
    OOXOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOXOOOOOO
    OOOOOOOOO
    OOOOOOOOO
    OOOOOOOOX
  `;
  const g = Grid.fromString(9, 9, data);
  const s = g.toString();
  expect(sanitize(s)).toBe(sanitize(data));

  const expectedGrid = new Grid(9, 9);
  expectedGrid.set(new Point(6, 0), 1);
  expectedGrid.set(new Point(7, 0), 1);
  expectedGrid.set(new Point(2, 1), 1);
  expectedGrid.set(new Point(2, 5), 1);
  expectedGrid.set(new Point(8, 8), 1);

  expect(sanitize(s)).toBe(sanitize(expectedGrid.toString()));
  expect(Grid.isEqual(g, expectedGrid)).toBeTruthy();
});

test('test isEqual', () => {
  const grid1 = new Grid(9, 9);
  grid1.set(new Point(6, 0), 1);
  grid1.set(new Point(7, 0), 1);
  grid1.set(new Point(2, 1), 1);
  grid1.set(new Point(2, 5), 1);
  grid1.set(new Point(8, 8), 1);

  const grid2 = new Grid(9, 9);
  grid2.set(new Point(6, 0), 1);
  grid2.set(new Point(7, 0), 1);
  grid2.set(new Point(2, 1), 1);
  grid2.set(new Point(2, 5), 1);
  grid2.set(new Point(8, 8), 1);

  const grid3 = new Grid(9, 9);
  grid3.set(new Point(6, 0), 1);
  grid3.set(new Point(7, 0), 1);
  grid3.set(new Point(2, 1), 1);
  grid3.set(new Point(2, 5), 1);

  const grid4 = new Grid(9, 9);
  grid4.set(new Point(6, 0), 1);
  grid4.set(new Point(7, 0), 1);
  grid4.set(new Point(2, 1), 1);
  grid4.set(new Point(2, 5), 1);
  grid4.set(new Point(2, 7), 1);
  grid4.set(new Point(8, 8), 1);

  // FIXME: grids other than 9x9 are currently not supported
  // const grid5 = new Grid(19, 19);
  // grid5.set(new Point(6, 0), 1);
  // grid5.set(new Point(7, 0), 1);
  // grid5.set(new Point(2, 1), 1);
  // grid5.set(new Point(2, 5), 1);
  // grid5.set(new Point(2, 7), 1);
  // grid5.set(new Point(8, 8), 1);

  expect(Grid.isEqual(grid1, grid1)).toBeTruthy();
  expect(Grid.isEqual(grid2, grid2)).toBeTruthy();
  expect(Grid.isEqual(grid3, grid3)).toBeTruthy();
  expect(Grid.isEqual(grid4, grid4)).toBeTruthy();
  expect(Grid.isEqual(grid1, grid2)).toBeTruthy();
  expect(Grid.isEqual(grid2, grid1)).toBeTruthy();
  expect(Grid.isEqual(grid1, grid3)).toBeFalsy();
  expect(Grid.isEqual(grid3, grid1)).toBeFalsy();
  expect(Grid.isEqual(grid1, grid4)).toBeFalsy();
  expect(Grid.isEqual(grid4, grid1)).toBeFalsy();
  // FIXME: grids other than 9x9 are currently not supported
  // expect(Grid.isEqual(grid4, grid5)).toBeFalsy();
});

test('test isSet of Grid', () => {
  const testGrid = new Grid(9, 9);
  testGrid.set(new Point(6, 0), 1);
  testGrid.set(new Point(7, 0), 1);
  testGrid.set(new Point(2, 1), 1);
  testGrid.set(new Point(2, 5), 1);
  testGrid.set(new Point(8, 8), 1);

  expect(testGrid.isSet(new Point(6, 0))).toBeTruthy();
  expect(testGrid.isSet(new Point(2, 1))).toBeTruthy();
  expect(testGrid.isSet(new Point(1, 2))).toBeFalsy();
});
