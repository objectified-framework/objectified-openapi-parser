export class SecurityStore {
  private security: any;

  constructor(private readonly segment: any) {
    this.security = segment;
  }

  public getSecurity = (): any => this.security;

  public setSecurity = (security: any) => this.security = security;
}
