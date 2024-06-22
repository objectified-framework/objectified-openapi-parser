import { Header, Link, MediaType, MediaTypeMap, Reference } from '.';
import { ParsingError } from '../ParsingError';

export type ResponseHeaderMap = {
  [key in string]: Header | Reference;
};

export type ResponseLinkMap = {
  [key in string]: Link | Reference;
};

export type ResponseOrReferenceMap = {
  [key in string]: Response | Reference;
};

// Covers 4.8.17.1
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

  public static parse(segment: any): Response {
    const obj = new Response();

    if (!segment['description']) {
      throw new ParsingError('Response segment is missing required "description"');
    }

    obj.setDescription(segment['description']);
    segment['headers'].forEach((value, key) => {
      if (value.contains('$ref')) {
        obj.getHeaders()[key] = Reference.parse(value);
      } else {
        obj.getHeaders()[key] = Header.parse(value);
      }
    });

    segment['content'].forEach((value, key) => (obj.getContent()[key] = MediaType.parse(value)));
    segment['links'].forEach((value, key) => {
      if (value.contains('$ref')) {
        obj.getLinks()[key] = Reference.parse(value);
      } else {
        obj.getLinks()[key] = Link.parse(value);
      }
    });

    return obj;
  }

  public getDescription = (): string => this._description;
  public getHeaders = (): ResponseHeaderMap => this._headers;
  public getContent = (): MediaTypeMap => this._content;
  public getLinks = (): ResponseLinkMap => this._links;

  public setDescription = (description: string) => (this._description = description);
  public setHeaders = (headers: ResponseHeaderMap) => (this._headers = headers);
  public setContent = (content: MediaTypeMap) => (this._content = content);
  public setLinks = (links: ResponseLinkMap) => (this._links = links);

  toString() {
    return `[Response] _description=${this._description} _headers=${this._headers} _content=${this._content} ` + `_links=${this._links}`;
  }
}
