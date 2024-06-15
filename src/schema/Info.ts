import {ContactStore, LicenseStore} from '../stores';

export class Info {
  private title: string;
  private summary: string;
  private description: string;
  private termsOfService: string;
  private version: string;
  private contact: ContactStore;
  private license: LicenseStore;

  public constructor(private readonly segment?: any) {
    if (segment) {
      if (!segment.title) {
        throw new Error('Title is required in info section');
      }

      if (!segment.version) {
        throw new Error('Version is required in info section');
      }

      this.title = segment['title'];
      this.version = segment['version'];
      this.summary = segment['summary'] ?? null;
      this.description = segment['description'] ?? null;
      this.termsOfService = segment['termsOfService'] ?? null;

      if (segment['contact']) {
        this.contact = new ContactStore(segment['contact']);
      }

      if (segment['license']) {
        this.license = new LicenseStore(segment['license']);
      }

      console.log(`[Info]: title=${this.title} version=${this.version}`);
    }
  }

  public getTitle = (): string => this.title;
  public getSummary = (): string => this.summary;
  public getDescription = (): string => this.description;
  public getTermsOfService = (): string => this.termsOfService;
  public getVersion = (): string => this.version;
  public getContact = (): ContactStore => this.contact;
  public getLicense = (): LicenseStore => this.license;

  public setTitle = (title: string) => this.title = title;
  public setSummary = (summary: string) => this.summary = summary;
  public setDescription = (description: string) => this.description = description;
  public setTermsOfService = (termsOfService: string) => this.termsOfService = termsOfService;
  public setVersion = (version: string) => this.version = version;
  public setContact = (contact: ContactStore) => this.contact = contact;
  public setLicense = (license: LicenseStore) => this.license = license;
}