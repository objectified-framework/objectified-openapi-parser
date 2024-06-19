// Covers 4.8.4.1
export class License {
  private _name: string;
  private _identifier: string;
  private _url: string;

  constructor() {}

  public getName = (): string => this._name;
  public getIdentifier = (): string => this._identifier;
  public getUrl = (): string => this._url;

  public setName = (name: string) => (this._name = name);
  public setIdentifier = (identifier: string) => (this._identifier = identifier);
  public setUrl = (url: string) => (this._url = url);
}
