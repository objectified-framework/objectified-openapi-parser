import { Header, Link, MediaTypeMap, Reference } from '.';

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

  public parse(segment: any): Response {
    const obj = new Response();

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
}
