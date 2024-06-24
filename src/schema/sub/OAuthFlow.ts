// Covers 4.8.29.1
import { ParsingError } from '..';

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

  /**
   * Parses a segment of an OpenAPI document containing an `OAuthFlow`.
   *
   * @param segment `OAuthFlow` OpenAPI segment.
   * @returns `OAuthFlow` object populated with the provided segment.
   */
  public static parse(section: string, segment: any): OAuthFlow {
    const obj = new OAuthFlow();
    const lowerSection = section.toLowerCase();

    if (lowerSection === 'implicit' || lowerSection === 'authorizationcode') {
      if (!segment['authorizationUrl']) {
        throw new ParsingError('OAuthFlow segment is missing required "authorizationUrl"');
      }
    }

    obj.setAuthorizationUrl(segment['authorizationUrl'] ?? null);

    if (lowerSection === 'password' || lowerSection === 'clientcredentials' || lowerSection === 'authorizationcode') {
      if (!segment['tokenUrl']) {
        throw new ParsingError('OAuthFlow segment is missing required "tokenUrl"');
      }
    }

    obj.setTokenUrl(segment['tokenUrl'] ?? null);

    if (!segment['scopes']) {
      throw new ParsingError('OAuthFlow segment is missing required "scopes"');
    }

    obj.setRefreshUrl(segment['refreshUrl']);

    if (segment['scopes']) {
      for (const key of Object.keys(segment['scopes'])) {
        const value = segment['scopes'][key];

        obj.getScopes()[key] = value;
      }
    }

    return obj;
  }

  public getAuthorizationUrl = (): string => this._authorizationUrl;
  public getTokenUrl = (): string => this._tokenUrl;
  public getRefreshUrl = (): string => this._refreshUrl;
  public getScopes = (): OAuthFlowHash => this._scopes;

  public setAuthorizationUrl = (authorizationUrl: string) => (this._authorizationUrl = authorizationUrl);
  public setTokenUrl = (tokenUrl: string) => (this._tokenUrl = tokenUrl);
  public setRefreshUrl = (refreshUrl: string) => (this._refreshUrl = refreshUrl);
  public setScopes = (scopes: OAuthFlowHash) => (this._scopes = scopes);

  toString() {
    return `[OAuthFlow] _authorizationUrl=${this._authorizationUrl} _tokenUrl=${this._tokenUrl} _refreshUrl=${this._refreshUrl} _scopes=${this._scopes}`;
  }
}
