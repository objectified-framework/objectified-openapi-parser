// Covers 4.8.19.1
export class Example {
  private _summary: string;
  private _description: string;
  private _value: any;
  private _externalValue: string;

  constructor() {}

  public getSummary = (): string => this._summary;
  public getDescription = (): string => this._description;
  public getValue = (): any => this._value;
  public getExternalValue = (): string => this._externalValue;

  public setSummary = (summary: string) => (this._summary = summary);
  public setDescription = (description: string) => (this._description = description);
  public setValue = (value: any) => (this._value = value);
  public setExternalValue = (externalValue: string) => (this._externalValue = externalValue);
}
