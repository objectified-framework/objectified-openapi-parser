import { Contact, License } from '.';

// Covers 4.8.2.1
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

  public parse(segment: any): Info {
    const obj = new Info();

    return obj;
  }

  public getTitle = (): string => this._title;
  public getSummary = (): string => this._summary;
  public getDescription = (): string => this._description;
  public getTermsOfService = (): string => this._termsOfService;
  public getContact = (): Contact => this._contact;
  public getLicense = (): License => this._license;
  public getVersion = (): string => this._version;

  public setTitle = (title: string) => (this._title = title);
  public setSummary = (summary: string) => (this._summary = summary);
  public setDescription = (description: string) => (this._description = description);
  public setTermsOfService = (termsOfService: string) => (this._termsOfService = termsOfService);
  public setContact = (contact: Contact) => (this._contact = contact);
  public setLicense = (license: License) => (this._license = license);
  public setVersion = (version: string) => (this._version = version);
}
