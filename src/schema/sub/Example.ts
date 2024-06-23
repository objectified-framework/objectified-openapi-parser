/**
 * Example is a section of the OpenAPI that embeds an example of use of a `Schema` or `Response`.
 *
 * {@link https://spec.openapis.org/oas/latest.html#example-object}
 */
export class Example {
  private _summary: string;
  private _description: string;
  private _value: any;
  private _externalValue: string;

  constructor() {}

  /**
   * Parses a segment of an OpenAPI document containing an `Example`.
   *
   * @param segment `Example` OpenAPI segment.
   * @returns `Example` object populated with the provided segment.
   */
  public static parse(segment: any): Example {
    const obj = new Example();

    obj.setSummary(segment['summary'] ?? null);
    obj.setDescription(segment['description'] ?? null);
    obj.setValue(segment['value'] ?? null);
    obj.setExternalValue(segment['externalValue'] ?? null);

    return obj;
  }

  /** Returns the summary. */
  public getSummary = (): string => this._summary;

  /** Returns the description. */
  public getDescription = (): string => this._description;

  /** Returns the value containing the `Example`. */
  public getValue = (): any => this._value;

  /** Returns the external value URI. */
  public getExternalValue = (): string => this._externalValue;

  /** Sets the short description for the example. */
  public setSummary = (summary: string) => (this._summary = summary);

  /** Sets the long description for the example.  CommonMark syntax _MAY_ be used for rich text representation. */
  public setDescription = (description: string) => (this._description = description);

  /**
   * Embedded literal example.  The `value` and `externalValue` field are mutually exclusive.  To represent examples of
   * media types that cannot naturally be represented in JSON or YAML, use a string value to contain the example,
   * escaping where necessary.
   *
   * @param value The example to embed.
   */
  public setValue = (value: any) => (this._value = value);

  /** A URI that points to the literal example. */
  public setExternalValue = (externalValue: string) => (this._externalValue = externalValue);

  toString() {
    return `[Example]: _summary=${this._summary} _description=${this._description} _value=${JSON.stringify(this._value)} _externalValue=${this._externalValue}`;
  }
}
