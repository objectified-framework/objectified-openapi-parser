// Covers 4.8.29.1
import { ParsingError } from '..';

export type OAuthFlowHash = {
  [key in string]: string;
};

/**
 * Header is a section of the OpenAPI that provides configuration details for a supported OAuth Flow.
 *
 * {@link https://spec.openapis.org/oas/latest.html#oauth-flow-object}
 */
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
   * @param section The section of OAuth definition being used: implicit, authorizationCode, password, and clientCredentials.
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

  /** Retrieves the autorization URL. */
  public getAuthorizationUrl = (): string => this._authorizationUrl;

  /** Retrieves the token URL. */
  public getTokenUrl = (): string => this._tokenUrl;

  /** Retrieves the refresh URL. */
  public getRefreshUrl = (): string => this._refreshUrl;

  /** Retrieves a map of scope definitions. */
  public getScopes = (): OAuthFlowHash => this._scopes;

  /** Sets the authorization URL to be used for the flow. */
  public setAuthorizationUrl = (authorizationUrl: string) => (this._authorizationUrl = authorizationUrl);

  /** Sets the token URL to be used for the flow. */
  public setTokenUrl = (tokenUrl: string) => (this._tokenUrl = tokenUrl);

  /** Sets the URL to be used for obtaining refresh tokens.  This _MUST_ be in the form of a URL. */
  public setRefreshUrl = (refreshUrl: string) => (this._refreshUrl = refreshUrl);

  /** Sets the available scopes for the OAuth2 security scheme. */
  public setScopes = (scopes: OAuthFlowHash) => (this._scopes = scopes);

  toString() {
    return `[OAuthFlow] _authorizationUrl=${this._authorizationUrl} _tokenUrl=${this._tokenUrl} _refreshUrl=${this._refreshUrl} _scopes=${this._scopes}`;
  }
}
