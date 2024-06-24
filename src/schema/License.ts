// Covers 4.8.4.1
import { ParsingError } from '.';

export class License {
  private _name: string; // Required
  private _identifier: string;
  private _url: string;

  constructor() {}

  /**
   * Parses a segment of an OpenAPI document containing an `License`.
   *
   * @param segment `License` OpenAPI segment.
   * @returns `License` object populated with the provided segment.
   */
  public static parse(segment: any): License {
    const obj = new License();

    if (!segment['name']) {
      throw new ParsingError('License segment is missing required "name"');
    }

    obj.setName(segment['name']);
    obj.setIdentifier(segment['identifier'] ?? null);
    obj.setUrl(segment['url'] ?? null);

    return obj;
  }

  public getName = (): string => this._name;
  public getIdentifier = (): string => this._identifier;
  public getUrl = (): string => this._url;

  public setName = (name: string) => (this._name = name);
  public setIdentifier = (identifier: string) => (this._identifier = identifier);
  public setUrl = (url: string) => (this._url = url);

  toString() {
    return `[License]: _name=${this._name} _identifier=${this._identifier} _url=${this._url}`;
  }
}
