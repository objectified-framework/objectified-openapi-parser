import { PathItem } from './sub';

// Covers 4.8.8.1
export type PathMap = {
  [key in string]: PathItem;
};

/**
 * Paths is a section of the OpenAPI that holds the relative paths to the individual endpoints and their operations.
 * The path is appended to the URL from the `Server` object in order to construct the full URL.  The Paths _MAY_ be
 * empty, due to Access Control List constraints.
 *
 * {@link https://spec.openapis.org/oas/latest.html#paths-object}
 */
export class Paths {
  private _paths: PathMap;

  constructor() {
    this._paths = {};
  }

  /**
   * Parses a segment of an OpenAPI document containing an `Paths`.
   *
   * @param segment `Paths` OpenAPI segment.
   * @returns `Paths` object populated with the provided segment.
   */
  public static parse(segment: any): Paths {
    const obj = new Paths();

    for (const key of Object.keys(segment)) {
      const value = segment[key];

      obj.getPaths()[key] = PathItem.parse(value);
    }

    return obj;
  }

  /** Retrieves the list of paths. */
  public getPaths = (): PathMap => this._paths;

  /** SDets a list of paths relative to their individual endpoints. */
  public setPaths = (paths: PathMap) => (this._paths = paths);

  toString() {
    return `[Paths] _paths=${this._paths}`;
  }
}
