import {ContactStore, LicenseStore} from '../stores';

export class Info {
  private title: string;
  private summary: string;
  private description: string;
  private termsOfService: string;
  private version: string;
  private contact: ContactStore;
  private license: LicenseStore;

  public constructor(private readonly segment: any) {
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