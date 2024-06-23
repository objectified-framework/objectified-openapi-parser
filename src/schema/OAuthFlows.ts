import { OAuthFlow } from '.';

// Covers 4.8.28.1
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

  public getImplicit = (): OAuthFlow => this._implicit;
  public getPassword = (): OAuthFlow => this._password;
  public getClientCredentials = (): OAuthFlow => this._clientCredentials;
  public getAuthorizationCode = (): OAuthFlow => this._authorizationCode;

  public setImplicit = (implicit: OAuthFlow) => (this._implicit = implicit);
  public setPassword = (password: OAuthFlow) => (this._password = password);
  public setClientCredentials = (clientCredentials: OAuthFlow) => (this._clientCredentials = clientCredentials);
  public setAuthorizationCode = (authorizationCode: OAuthFlow) => (this._authorizationCode = authorizationCode);

  toString() {
    return `[OAuthFlows] _implicit=${this._implicit} _password=${this._password} _clientCredentials=${this._clientCredentials} _authorizationCode=${this._authorizationCode}`;
  }
}
