import { PathItem } from '.';

// Covers 4.8.8.1
export type PathMap = {
  [key in string]: PathItem;
};

// Covers 4.8.8.1
export class Paths {
  private _paths: PathMap;

  constructor() {
    this._paths = {};
  }

  public parse(segment: any): Paths {
    const obj = new Paths();

    segment.forEach((value, key) => (obj.getPaths()[key] = PathItem.parse(value)));

    return obj;
  }

  public getPaths = (): PathMap => this._paths;

  public setPaths = (paths: PathMap) => (this._paths = paths);
}
