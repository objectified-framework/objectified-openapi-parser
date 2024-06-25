import { OAuthFlow } from './sub';

/**
 * OAuthFlows is a section of the OpenAPI that allows configuration of the supported OAuth Flows.
 *
 * {@link https://spec.openapis.org/oas/latest.html#oauth-flows-object}
 */
export class OAuthFlows {
  private _implicit: OAuthFlow;
  private _password: OAuthFlow;
  private _clientCredentials: OAuthFlow;
  private _authorizationCode: OAuthFlow;

  constructor() {
    this._implicit = new OAuthFlow();
    this._password = new OAuthFlow();
    this._clientCredentials = new OAuthFlow();
    this._authorizationCode = new OAuthFlow();
  }

  /**
   * Parses a segment of an OpenAPI document containing an `OAuthFlows`.
   *
   * @param segment `OAuthFlows` OpenAPI segment.
   * @returns `OAuthFlows` object populated with the provided segment.
   */
  public static parse(segment: any): OAuthFlows {
    const obj = new OAuthFlows();

    if (segment['implicit']) {
      obj.setImplicit(OAuthFlow.parse('implicit', segment['implicit']));
    }

    if (segment['password']) {
      obj.setPassword(OAuthFlow.parse('password', segment['password']));
    }

    if (segment['clientCredentials']) {
      obj.setClientCredentials(OAuthFlow.parse('clientCredentials', segment['clientCredentials']));
    }

    if (segment['authorizationCode']) {
      obj.setAuthorizationCode(OAuthFlow.parse('authorizationCode', segment['authorizationCode']));
    }

    return obj;
  }

  /** Retrieves the implicit configuration. */
  public getImplicit = (): OAuthFlow => this._implicit;

  /** Retrieves the password configuration. */
  public getPassword = (): OAuthFlow => this._password;

  /** Retrieves the clientCredentials configuration. */
  public getClientCredentials = (): OAuthFlow => this._clientCredentials;

  /** Retrieves the authorizationCode configuration. */
  public getAuthorizationCode = (): OAuthFlow => this._authorizationCode;

  /** Sets the configuration for the OAuth Implicit flow. */
  public setImplicit = (implicit: OAuthFlow) => (this._implicit = implicit);

  /** Sets the configuration for the OAuth Resource Owner Password flow. */
  public setPassword = (password: OAuthFlow) => (this._password = password);

  /** Sets the configuration for the OAuth Client Credentials flow. */
  public setClientCredentials = (clientCredentials: OAuthFlow) => (this._clientCredentials = clientCredentials);

  /** Sets the configuration for the OAuth Authorization Code flow. */
  public setAuthorizationCode = (authorizationCode: OAuthFlow) => (this._authorizationCode = authorizationCode);

  toString() {
    return `[OAuthFlows] _implicit=${this._implicit} _password=${this._password} _clientCredentials=${this._clientCredentials} _authorizationCode=${this._authorizationCode}`;
  }
}
