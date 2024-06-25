import { ParsingError } from '.';

/**
 * License is a section of the OpenAPI that provides license information for the exposed API.
 *
 * {@link https://spec.openapis.org/oas/latest.html#license-object}
 */
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

  /** Retrieves the license name. */
  public getName = (): string => this._name;

  /** Retrieves the identifier. */
  public getIdentifier = (): string => this._identifier;

  /** Retrieves the URL. */
  public getUrl = (): string => this._url;

  /** _*REQUIRED*_.  Sets the license name used for the API. */
  public setName = (name: string) => (this._name = name);

  /** Sets an SPDX license expression for the API.  The `identifier` field is mutually exclusive for the `url` field. */
  public setIdentifier = (identifier: string) => (this._identifier = identifier);

  /** Sets a URL to the license used for the API.  This _MUST_ be in the form of a URL. */
  public setUrl = (url: string) => (this._url = url);

  toString() {
    return `[License]: _name=${this._name} _identifier=${this._identifier} _url=${this._url}`;
  }
}
