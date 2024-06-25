import { License, ParsingError } from '.';
import { Contact } from './sub';

/**
 * Info is a section of the OpenAPI that provides metadata about the API.  The metadata _MAY_ be used by the clients
 * if needed, and _MAY_ be presented in editing or documentation generation tools for convenience.
 *
 * {@link https://spec.openapis.org/oas/latest.html#info-object}
 */
export class Info {
  private _title: string; // Required
  private _summary: string;
  private _description: string;
  private _termsOfService: string;
  private _contact: Contact;
  private _license: License;
  private _version: string; // Required

  constructor() {
    this._contact = new Contact();
    this._license = new License();
  }

  /**
   * Parses a segment of an OpenAPI document containing an `Info`.
   *
   * @param segment `Info` OpenAPI segment.
   * @returns `Info` object populated with the provided segment.
   */
  public static parse(segment: any): Info {
    const obj = new Info();

    if (!segment['title']) {
      throw new ParsingError('Info segment is missing required "title"');
    }

    if (!segment['version']) {
      throw new ParsingError('Info segment is missing required "version"');
    }

    obj.setTitle(segment['title']);
    obj.setSummary(segment['summary']);
    obj.setTermsOfService(segment['termsOfService']);
    obj.setContact(segment['contact'] ? Contact.parse(segment['contact']) : null);
    obj.setLicense(segment['license'] ? License.parse(segment['license']) : null);
    obj.setVersion(segment['version']);

    return obj;
  }

  /** Retrieves the title of the API. */
  public getTitle = (): string => this._title;

  /** Retrieves the summary. */
  public getSummary = (): string => this._summary;

  /** Retrieves the description. */
  public getDescription = (): string => this._description;

  /** Retrieves the terms of service. */
  public getTermsOfService = (): string => this._termsOfService;

  /** Retrieves the `Contact` summary. */
  public getContact = (): Contact => this._contact;

  /** Retrieves the `License` summary. */
  public getLicense = (): License => this._license;

  /** Retrieves the version. */
  public getVersion = (): string => this._version;

  /** _*REQUIRED*_.  Sets the title of the API. */
  public setTitle = (title: string) => (this._title = title);

  /** Sets the short summary of the API. */
  public setSummary = (summary: string) => (this._summary = summary);

  /** Sets the description of the API.  CommonMark syntax _MAY_ be used for rich text representation. */
  public setDescription = (description: string) => (this._description = description);

  /** Sets a URL to the Terms of Service for the API.  This _MUST_ be in the form of a URL. */
  public setTermsOfService = (termsOfService: string) => (this._termsOfService = termsOfService);

  /** Sets the contact information for the exposed API. */
  public setContact = (contact: Contact) => (this._contact = contact);

  /** Sets the license information for the exposed API. */
  public setLicense = (license: License) => (this._license = license);

  /** _*REQUIRED*_.  Sets the version of the OpenAPI document. */
  public setVersion = (version: string) => (this._version = version);

  toString() {
    return (
      `[Info]: _title=${this._title} _summary=${this._summary} _description=${this._description} ` +
      `_termsOfService=${this._termsOfService} _contact=${this._contact} _license=${this._license} ` +
      `_version=${this._version}`
    );
  }
}
