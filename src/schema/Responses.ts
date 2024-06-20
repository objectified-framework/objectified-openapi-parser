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

  public getDefault = (): Response | Reference => this._default;
  public getStatusCode = (): string => this._statusCode;
  public getResponse = (): Response | Reference => this._response;

  public setDefault = (_default: Response | Reference) => (this._default = _default);
  public setStatusCode = (statusCode: string) => (this._statusCode = statusCode);
  public setResponse = (response: Response | Reference) => (this._response = response);
}
