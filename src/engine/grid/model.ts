import Point from './point';

export default class CellMap {
  private map = new Map<string, 0 | 1>();

  set(key: Point, value: 0 | 1): this {
    this.map.set(key.toString(), value);
    return this;
  }

  get(key: Point): 0 | 1 | undefined {
    return this.map.get(key.toString());
  }

  clear() {
    this.map.clear();
  }

  delete(key: Point): boolean {
    return this.map.delete(key.toString());
  }

  has(key: Point): boolean {
    return this.map.has(key.toString());
  }

  get size() {
    return this.map.size;
  }

  private isEqual(key: string, value: 0 | 1): boolean {
    return this.map.get(key) === value;
  }

  hasSameValuesAs(otherCallMap: CellMap): boolean {
    let result = true;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function isEqual(value: 0 | 1, key: string, _map: any) {
      if (!otherCallMap.isEqual(key, value)) result = false;
    }
    this.map.forEach(isEqual);
    return result;
  }
}
