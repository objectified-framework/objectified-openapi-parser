// Covers 4.8.29.1
export type OAuthFlowHash = {
  [key in string]: string;
};

// Covers 4.8.29.1
export class OAuthFlow {
  private _authorizationUrl: string; // Required
  private _tokenUrl: string; // Required
  private _refreshUrl: string;
  private _scopes: OAuthFlowHash; // Required

  constructor() {
    this._scopes = {};
  }

  public getAuthorizationUrl = (): string => this._authorizationUrl;
  public getTokenUrl = (): string => this._tokenUrl;
  public getRefreshUrl = (): string => this._refreshUrl;
  public getScopes = (): OAuthFlowHash => this._scopes;

  public setAuthorizationUrl = (authorizationUrl: string) => (this._authorizationUrl = authorizationUrl);
  public setTokenUrl = (tokenUrl: string) => (this._tokenUrl = tokenUrl);
  public setRefreshUrl = (refreshUrl: string) => (this._refreshUrl = refreshUrl);
  public setScopes = (scopes: OAuthFlowHash) => (this._scopes = scopes);
}
