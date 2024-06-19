// Covers 4.8.6.1
export class ServerVariable {
  private _enum: [string];
  private _default: string; // Required
  private _description: string;

  constructor() {
    this._enum = [];
  }

  public getEnum = (): [string] => this._enum;
  public getDefault = (): string => this._default;
  public getDescription = (): string => this._description;

  public setEnum = (_enum: [string]) => (this._enum = _enum);
  public setDefault = (def: string) => (this._default = def);
  public setDescription = (description: string) => (this._description = description);
}
