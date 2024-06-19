export class OAuthFlowsStore {
  private authorizationUrl: string;
  private tokenUrl: string;
  private refreshUrl: string;
  private scopes: any;

  public constructor(
    private flowType?: string,
    private readonly segment?: any,
  ) {
    if (flowType && segment) {
      // const lowerFlowType = flowType.toLowerCase();
      //
      // switch (lowerFlowType) {
      //   case 'implicit':
      //     this.authorizationUrl = segment['authorizationUrl'];
      //
      //     if (!this.authorizationUrl) {
      //       throw new Error(`"${flowType}" oauth2 security scheme requires a valid authorizationUrl`);
      //     }
      //     break;
      //
      //   case 'authorizationcode':
      //     this.authorizationUrl = segment['authorizationUrl'];
      //     this.tokenUrl = segment['tokenUrl'];
      //
      //     if (!this.authorizationUrl) {
      //       throw new Error(`"${flowType}" oauth2 security scheme requires a valid authorizationUrl`);
      //     }
      //
      //     if (!this.tokenUrl) {
      //       throw new Error(`"${flowType}" oauth2 security scheme requires a valid tokenUrl`);
      //     }
      //
      //     break;
      //
      //   case 'password':
      //     this.tokenUrl = segment['tokenUrl'];
      //
      //     if (!this.tokenUrl) {
      //       throw new Error(`"${flowType}" oauth2 security scheme requires a valid tokenUrl`);
      //     }
      //     break;
      //
      //   case 'clientcredentials':
      //     this.tokenUrl = segment['tokenUrl'];
      //
      //     if (!this.tokenUrl) {
      //       throw new Error(`"${flowType}" oauth2 security scheme requires a valid tokenUrl`);
      //     }
      //     break;
      //
      //   default:
      //     throw new Error(`Flow type '${flowType}' unsupported in flows store`);
      // }

      this.setFlowType(flowType);
      this.setAuthorizationUrl(segment['authorizationUrl'] ?? null);
      this.setTokenUrl(segment['tokenUrl'] ?? null);
      this.setRefreshUrl(segment['refreshUrl'] ?? null);
      this.setScopes(segment['scopes'] ?? {});
    }
  }

  public getAuthorizationUrl = (): string => this.authorizationUrl;
  public getTokenUrl = (): string => this.tokenUrl;
  public getRefreshUrl = (): string => this.refreshUrl;
  public getScopes = (): any => this.scopes;
  public getFlowType = (): string => this.flowType;

  public setAuthorizationUrl = (authorizationUrl: string) => (this.authorizationUrl = authorizationUrl);
  public setTokenUrl = (tokenUrl: string) => (this.tokenUrl = tokenUrl);
  public setRefreshUrl = (refreshUrl: string) => (this.refreshUrl = refreshUrl);
  public setScopes = (scopes: any) => (this.scopes = scopes);
  public setFlowType = (flowType: string) => {
    switch (flowType.toLowerCase()) {
      case 'implicit':
      case 'authorizationcode':
      case 'password':
      case 'clientcredentials':
        this.flowType = flowType;
        break;

      default:
        throw new Error(`Unknown flow type specified: '${flowType}'`);
    }
  };
}
