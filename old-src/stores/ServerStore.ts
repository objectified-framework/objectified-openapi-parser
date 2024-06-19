// Covers 4.8.5.1
export class ServerStore {
  private description: string;
  private url: string;
  private variables: any;

  constructor(private readonly segment?: any) {
    if (segment) {
      if (!segment['url']) {
        throw new Error('URL is required in server segment');
      }

      this.setUrl(segment['url']);
      this.setDescription(segment['description'] ?? '');
      this.setVariables(segment['variables'] ?? {});
    }
  }

  public getUrl = (): string => this.url;
  public getDescription = (): string => this.description;
  public getVariables = (): any => this.variables;

  public setUrl = (url: string) => (this.url = url);
  public setDescription = (description: string) => (this.description = description);
  public setVariables = (variables: any) => (this.variables = variables);
}
