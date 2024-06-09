export class SecurityStore {
  private security: any;

  constructor(private readonly segment: any) {
    this.security = segment;
  }
}
