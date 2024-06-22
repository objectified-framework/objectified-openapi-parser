import { Reference, Response } from '.';

// Covers 4.8.16.1
export class Responses {
  private _default: Response | Reference;
  private _statusCode: string;
  private _response: Response | Reference;

  constructor() {
    this._default = null;
    this._response = null;
  }

  public static parse(segment: any): Responses {
    const obj = new Responses();

    if (segment['default']) {
      if (Reference.isReference(segment['default'])) {
        obj.setDefault(Reference.parse(segment['default']));
      } else {
        obj.setDefault(Response.parse(segment['default']));
      }
    } else {
      const key = Object.keys(segment)[0];
      const value = segment[key];

      obj.setStatusCode(key);

      if (Reference.isReference(value)) {
        obj.setResponse(Reference.parse(value));
      } else {
        obj.setResponse(Response.parse(value));
      }
    }

    return obj;
  }

  public getDefault = (): Response | Reference => this._default;
  public getStatusCode = (): string => this._statusCode;
  public getResponse = (): Response | Reference => this._response;

  public setDefault = (_default: Response | Reference) => (this._default = _default);
  public setStatusCode = (statusCode: string) => (this._statusCode = statusCode);
  public setResponse = (response: Response | Reference) => (this._response = response);

  toString() {
    return `[Responses] _default=${this._default} statusCode=${this._statusCode} _response=${this._response}`;
  }
}
