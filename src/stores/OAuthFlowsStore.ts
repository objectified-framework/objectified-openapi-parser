export class OAuthFlowsStore {
  private authorizationUrl: string;
  private tokenUrl: string;
  private refreshUrl: string;
  private scopes: any;

  public constructor(private readonly flowType: string, private readonly segment: any) {
    const lowerFlowType = flowType.toLowerCase();

    this.scopes = {};

    switch(lowerFlowType) {
      case 'implicit':
        this.authorizationUrl = segment['authorizationUrl'];

        if (!this.authorizationUrl) {
          throw new Error(`"${flowType}" oauth2 security scheme requires a valid authorizationUrl`);
        }
        break;

      case 'authorizationcode':
        this.authorizationUrl = segment['authorizationUrl'];
        this.tokenUrl = segment['tokenUrl'];

        if (!this.authorizationUrl) {
          throw new Error(`"${flowType}" oauth2 security scheme requires a valid authorizationUrl`);
        }

        if (!this.tokenUrl) {
          throw new Error(`"${flowType}" oauth2 security scheme requires a valid tokenUrl`);
        }

        break;

      case 'password':
        this.tokenUrl = segment['tokenUrl'];

        if (!this.tokenUrl) {
          throw new Error(`"${flowType}" oauth2 security scheme requires a valid tokenUrl`);
        }
        break;

      case 'clientcredentials':
        this.tokenUrl = segment['tokenUrl'];

        if (!this.tokenUrl) {
          throw new Error(`"${flowType}" oauth2 security scheme requires a valid tokenUrl`);
        }
        break;

      default:
        throw new Error(`Flow type '${flowType}' unsupported in flows store`);
    }

    this.refreshUrl = segment['refreshUrl'];

    if (segment['scopes']) {
      this.scopes = segment['scopes'];
    }
  }
}