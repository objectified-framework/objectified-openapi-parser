// Covers 4.8.11.1
export class ExternalDocumentation {
  private _description: string;
  private _url: string; // Required

  constructor() {}

  public getDescription = (): string => this._description;
  public getUrl = (): string => this._url;

  public setDescription = (description: string) => (this._description = description);
  public setUrl = (url: string) => (this._url = url);
}
