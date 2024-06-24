// Covers 4.8.6.1
import { ParsingError } from '..';

/**
 * ServerVariable is a section of the OpenAPI that represents  a SErver Variable for server URL template substitution.
 *
 * {@link https://spec.openapis.org/oas/latest.html#server-variable-object}
 */
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

  /** Retrieves an enumeration of values, if set. */
  public getEnum = (): string[] => this._enum;

  /** Retrieves the default value. */
  public getDefault = (): string => this._default;

  /** Retrieves the description. */
  public getDescription = (): string => this._description;

  /** Sets an enumeration of string values to be used if the substitution options are from a limited set. */
  public setEnum = (_enum: string[]) => (this._enum = _enum);

  /**
   * _*REQUIRED*_.  Sets the default value to use for substitution, which _SHALL_ be sent if an alternative
   * value is _not_supplied.
   *
   * @param def
   */
  public setDefault = (def: string) => (this._default = def);

  /** Sets an optional description for the server variable.  CommonMark syntax _MAY_ be used for rich text representation. */
  public setDescription = (description: string) => (this._description = description);

  toString() {
    return `[ServerVariable] _enum=${this._enum} _default=${this._default} _description=${this._description}`;
  }
}
