export class ContactStore {
  private name: string;
  private url: string;
  private email: string;

  public constructor(private readonly segment?: any) {
    if (segment) {
      this.setName(segment['name'] ?? null);
      this.setUrl(segment['url'] ?? null);
      this.setEmail(segment['email'] ?? null);
    }
  }

  public getName = (): string => this.name;
  public getUrl = (): string => this.url;
  public getEmail = (): string => this.email;

  public setName = (name: string) => this.name = name;
  public setUrl = (url: string) => this.url = url;
  public setEmail = (email: string) => this.email = email;
}