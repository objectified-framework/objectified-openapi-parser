// Covers 4.8.6.1
import { ParsingError } from '..';

export class ServerVariable {
  private _enum: string[];
  private _default: string; // Required
  private _description: string;

  constructor() {
    this._enum = [];
  }

  /**
   * Parses a segment of an OpenAPI document containing an `ServerVariable`.
   *
   * @param segment `ServerVariable` OpenAPI segment.
   * @returns `ServerVariable` object populated with the provided segment.
   */
  public static parse(segment: any): ServerVariable {
    const obj = new ServerVariable();

    if (!segment['default']) {
      throw new ParsingError('ServerVariable segment is missing required "default"');
    }

    obj.setEnum(segment['enum'] ?? []);
    obj.setDefault(segment['default']);
    obj.setDescription(segment['description'] ?? null);

    return obj;
  }

  public getEnum = (): string[] => this._enum;
  public getDefault = (): string => this._default;
  public getDescription = (): string => this._description;

  public setEnum = (_enum: string[]) => (this._enum = _enum);
  public setDefault = (def: string) => (this._default = def);
  public setDescription = (description: string) => (this._description = description);

  toString() {
    return `[ServerVariable] _enum=${this._enum} _default=${this._default} _description=${this._description}`;
  }
}
