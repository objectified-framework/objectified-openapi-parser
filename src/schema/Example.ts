// Covers 4.8.19.1
export class Example {
  private _summary: string;
  private _description: string;
  private _value: any;
  private _externalValue: string;

  constructor() {}

  public static parse(segment: any): Example {
    const obj = new Example();

    obj.setSummary(segment['summary'] ?? null);
    obj.setDescription(segment['description'] ?? null);
    obj.setValue(segment['value'] ?? null);
    obj.setExternalValue(segment['externalValue'] ?? null);

    return obj;
  }

  public getSummary = (): string => this._summary;
  public getDescription = (): string => this._description;
  public getValue = (): any => this._value;
  public getExternalValue = (): string => this._externalValue;

  public setSummary = (summary: string) => (this._summary = summary);
  public setDescription = (description: string) => (this._description = description);
  public setValue = (value: any) => (this._value = value);
  public setExternalValue = (externalValue: string) => (this._externalValue = externalValue);

  toString() {
    return `[Example]: _summary=${this._summary} _description=${this._description} _value=${JSON.stringify(this._value)} _externalValue=${this._externalValue}`;
  }
}
