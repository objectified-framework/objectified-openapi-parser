// Covers 4.8.3.1
export class Contact {
  private _name: string;
  private _url: string;
  private _email: string;

  constructor() {}

  public static parse(segment: any): Contact {
    const obj = new Contact();

    obj.setName(segment['name'] ?? null);
    obj.setUrl(segment['url'] ?? null);
    obj.setEmail(segment['email'] ?? null);

    return obj;
  }

  public getName = (): string => this._name;
  public getUrl = (): string => this._url;
  public getEmail = (): string => this._email;

  public setName = (name: string) => (this._name = name);
  public setUrl = (url: string) => (this._url = url);
  public setEmail = (email: string) => (this._email = email);

  toString() {
    return `[Contact]: _name=${this._name} _url=${this._url} _email=${this._email}`;
  }
}
