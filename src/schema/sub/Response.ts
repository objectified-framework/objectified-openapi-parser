import { Link, MediaType, MediaTypeMap, ParsingError } from '..';
import { Reference, Header } from '.';

export type ResponseHeaderMap = {
  [key in string]: Header | Reference;
};

export type ResponseLinkMap = {
  [key in string]: Link | Reference;
};

export type ResponseOrReferenceMap = {
  [key in string]: Response | Reference;
};

/**
 * Response is a section of the OpenAPI that describes a single response from an API Operation, including design-time,
 * static `links` to the operations based on the response.
 *
 * {@link https://spec.openapis.org/oas/latest.html#response-object}
 */
export class Response {
  private _description: string;
  private _headers: ResponseHeaderMap;
  private _content: MediaTypeMap;
  private _links: ResponseLinkMap;

  constructor() {
    this._headers = {};
    this._content = {};
    this._links = {};
  }

  /**
   * Parses a segment of an OpenAPI document containing an `Response`.
   *
   * @param segment `Response` OpenAPI segment.
   * @returns `Response` object populated with the provided segment.
   */
  public static parse(segment: any): Response {
    const obj = new Response();

    if (!segment['description']) {
      throw new ParsingError('Response segment is missing required "description"');
    }

    obj.setDescription(segment['description']);

    if (segment['headers']) {
      for (const key of Object.keys(segment['headers'])) {
        const value = segment['headers'][key];

        if (Reference.isReference(value)) {
          obj.getHeaders()[key] = Reference.parse(value);
        } else {
          obj.getHeaders()[key] = Header.parse(value);
        }
      }
    }

    if (segment['content']) {
      for (const key of Object.keys(segment['content'])) {
        const value = segment['content'][key];

        obj.getContent()[key] = MediaType.parse(value);
      }
    }

    if (segment['links']) {
      for (const key of Object.keys(segment['links'])) {
        const value = segment['links'][key];

        if (Reference.isReference(value)) {
          obj.getLinks()[key] = Reference.parse(value);
        } else {
          obj.getLinks()[key] = Link.parse(value);
        }
      }
    }

    return obj;
  }

  /** Retrieves the description. */
  public getDescription = (): string => this._description;

  /** Retrieves a map of the headers to descriptions. */
  public getHeaders = (): ResponseHeaderMap => this._headers;

  /** Retrieves a map of descriptions to response payloads. */
  public getContent = (): MediaTypeMap => this._content;

  /** Retrieves a map of operation links to responses. */
  public getLinks = (): ResponseLinkMap => this._links;

  /** _*REQUIRED*_.  Sets the description of the response.  CommonMark syntax _MAY_ be used for rich text representation. */
  public setDescription = (description: string) => (this._description = description);

  /** Sets mapping of a header name to its definition. */
  public setHeaders = (headers: ResponseHeaderMap) => (this._headers = headers);

  /** Sets mapping of descriptions to potential response payloads. */
  public setContent = (content: MediaTypeMap) => (this._content = content);

  /** Sets mapping of operations links that can be followed from the response. */
  public setLinks = (links: ResponseLinkMap) => (this._links = links);

  toString() {
    return `[Response] _description=${this._description} _headers=${this._headers} _content=${this._content} ` + `_links=${this._links}`;
  }
}
