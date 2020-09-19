import Point from './point';

export function sanitize(s: string): string {
  return s.replace(/[^OX]/g, '');
}

export function posToCell(pos: number, width: number, height: number): Point {
  if (pos > width * height) {
    throw new Error('Invalid position');
  }
  const x = pos % width;
  const y = Math.floor(pos / width);
  return new Point(x, y);
}
