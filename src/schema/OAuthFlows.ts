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
}
