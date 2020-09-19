export default class Point {
  constructor(public x: number, public y: number) {}

  public values(): [number, number] {
    return [this.x, this.y];
  }

  public toString(): string {
    return `${this.x},${this.y}`;
  }
}
