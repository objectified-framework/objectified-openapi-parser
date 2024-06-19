// Covers 4.8.3.1
export class Contact {
  private _name: string;
  private _url: string;
  private _email: string;

  constructor() {}

  public getName = (): string => this._name;
  public getUrl = (): string => this._url;
  public getEmail = (): string => this._email;

  public setName = (name: string) => (this._name = name);
  public setUrl = (url: string) => (this._url = url);
  public setEmail = (email: string) => (this._email = email);
}
