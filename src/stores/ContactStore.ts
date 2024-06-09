export class ContactStore {
  private name: string;
  private url: string;
  private email: string;

  public constructor(private readonly segment: any) {
    this.name = segment['name'] ?? null;
    this.url = segment['url'] ?? null;
    this.email = segment['email'] ?? null;
  }
}