export class LicenseStore {
  private name: string;
  private identifier: string;
  private url: string;

  public constructor(private readonly segment?: any) {
    if (segment) {
      if (!segment['name']) {
        throw new Error('Name is required in license section of info');
      }

      this.name = segment['name'];
      this.identifier = segment['identifier'] ?? null;
      this.url = segment['url'] ?? null;

      console.log(`[LicenseStore]: name=${this.name}`);
    }
  }

  public getName = (): string => this.name;
  public getIdentifier = (): string => this.identifier;
  public getUrl = (): string => this.url;

  public setName = (name: string) => this.name = name;
  public setIdentifier = (identifier: string) => this.identifier = identifier;
  public setUrl = (url: string) => this.url = url;
}