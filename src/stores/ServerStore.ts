export class ServerStore {
  private description: string;
  private url: string;

  constructor(private readonly segment?: any) {
    if (segment) {
      if (!segment['url']) {
        throw new Error('URL is required in server segment');
      }

      this.url = segment['url'];
      this.description = segment['description'] ?? '';
    }
  }

  public getUrl = (): string => this.url;
  public getDescription = (): string => this.description;

  public setUrl = (url: string) => (this.url = url);
  public setDescription = (description: string) => (this.description = description);
}
