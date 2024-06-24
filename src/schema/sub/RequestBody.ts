import { MediaType, MediaTypeMap, ParsingError } from '..';
import { Reference } from '.';

export type RequestBodyOrReferenceMap = {
  [key in string]: RequestBody | Reference;
};

/**
 * RequestBody is a section of the OpenAPI that describes a single request body.
 *
 * {@link https://spec.openapis.org/oas/latest.html#request-body-object}
 */
export class RequestBody {
  private _description: string;
  private _content: MediaTypeMap; // Required
  private _required: boolean;

  constructor() {
    this._content = {};
  }

  /**
   * Parses a segment of an OpenAPI document containing an `RequestBody`.
   *
   * @param segment `RequestBody` OpenAPI segment.
   * @returns `RequestBody` object populated with the provided segment.
   */
  public static parse(segment: any): RequestBody {
    const obj = new RequestBody();

    if (!segment['content']) {
      throw new ParsingError('RequestBody segment is missing required "content"');
    }

    obj.setDescription(segment['description'] ?? null);
    obj.setRequired(segment['required'] ?? false);

    for (const key of Object.keys(segment['content'])) {
      const value = segment['content'][key];

      obj.getContent()[key] = MediaType.parse(value);
    }

    return obj;
  }

  /** Retrieves the description. */
  public getDescription = (): string => this._description;

  /** Retrieves the content of the request body. */
  public getContent = (): MediaTypeMap => this._content;

  /** Indicates whether or not the request body is required. */
  public isRequired = (): boolean => this._required;

  /** Sets a brief description of the request body.  This could contain examples of use.  CommonMark syntax _MAY_ be used for rich text representation. */
  public setDescription = (description: string) => (this._description = description);

  /** _*REQUIRED*_.  The content of the request body. */
  public setContent = (content: MediaTypeMap) => (this._content = content);

  /** Sets if the request body is required in a request. */
  public setRequired = (required: boolean) => (this._required = required);

  toString() {
    return `[RequestBody] _description=${this._description} _content=${this._content} _required=${this._required}`;
  }
}
