/**
 * Contact is a section of the OpenAPI that specifies contact information for the exposed API.
 *
 * {@link https://spec.openapis.org/oas/latest.html#contact-object}
 */
export class Contact {
  private _name: string;
  private _url: string;
  private _email: string;

  constructor() {}

  /**
   * Parses a segment of an OpenAPI document containing a `Contact`.
   *
   * @param segment `Contact` OpenAPI segment
   * @returns `Contact` object populated with the provided segment.
   */
  public static parse(segment: any): Contact {
    const obj = new Contact();

    obj.setName(segment['name'] ?? null);
    obj.setUrl(segment['url'] ?? null);
    obj.setEmail(segment['email'] ?? null);

    return obj;
  }

  /** Retrieves the name. */
  public getName = (): string => this._name;

  /** Retrieves the URL. */
  public getUrl = (): string => this._url;

  /** Retrieves the Email */
  public getEmail = (): string => this._email;

  /** Sets the identifying name of the contract person or organization */
  public setName = (name: string) => (this._name = name);

  /** Sets the URL pointing to the contact information.  This _MUST_ be in the form of a URL. */
  public setUrl = (url: string) => (this._url = url);

  /** Sets the email address of the contact person or orgamization.  This _MUST_ be in the form of an email address. */
  public setEmail = (email: string) => (this._email = email);

  toString() {
    return `[Contact]: _name=${this._name} _url=${this._url} _email=${this._email}`;
  }
}
