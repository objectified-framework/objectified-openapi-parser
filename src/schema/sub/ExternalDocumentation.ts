import { ParsingError } from '..';

/**
 * ExternalDocumentation is a section of the OpenAPI that allows referencing an external resource for extended
 * documentation.
 *
 * {@link https://spec.openapis.org/oas/latest.html#external-documentation-object}
 */
export class ExternalDocumentation {
  private _description: string;
  private _url: string; // Required

  constructor() {}

  /**
   * Parses a segment of an OpenAPI document containing an `ExternalDocumentation`.
   *
   * @param segment `ExternalDocumentation` OpenAPI segment.
   * @returns `ExternalDocumentation` object populated with the provided segment.
   */
  public static parse(segment: any): ExternalDocumentation {
    const obj = new ExternalDocumentation();

    if (!segment['url']) {
      throw new ParsingError('ExternalDocs segment is missing required "url"');
    }

    obj.setDescription(segment['description'] ?? null);
    obj.setUrl(segment['url']);

    return obj;
  }

  /** Retrieves the description. */
  public getDescription = (): string => this._description;

  /** Retrieves the URL for the target documentation. */
  public getUrl = (): string => this._url;

  /** Sets a description of the target documentation.  CommonMark syntax _MAY_ be used for rich text representation. */
  public setDescription = (description: string) => (this._description = description);

  /** *_REQUIRED_*.  The URL for the target documentation.  This _MUST_ be in the form of a URL. */
  public setUrl = (url: string) => (this._url = url);

  toString() {
    return `[ExternalDocumentation] _description=${this._description} url=${this._url}`;
  }
}
