export class LicenseStore {
  private name: string;
  private identifier: string;
  private url: string;

  public constructor(private readonly segment?: any) {
    if (segment) {
      this.setName(segment['name'] ?? null);
      this.setIdentifier(segment['identifier'] ?? null);
      this.setUrl(segment['url'] ?? null);

      console.log(`[LicenseStore]: name=${this.name}`);
    }
  }

  public getName = (): string => this.name;
  public getIdentifier = (): string => this.identifier;
  public getUrl = (): string => this.url;

  public setName = (name: string) => {
    if (!name) {
      throw new Error('Name is required in license section of info');
    }

    this.name = name;
  };
  public setIdentifier = (identifier: string) => (this.identifier = identifier);
  public setUrl = (url: string) => (this.url = url);
}
