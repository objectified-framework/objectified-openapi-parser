import { OAuthFlows, ParsingError } from '.';
import { Reference } from './sub';

export type SecuritySchemeOrReferenceMap = {
  [key in string]: SecurityScheme | Reference;
};

/**
 * SecurityScheme is a section of the OpenAPI that defines a security scheme that can be used by the operations.
 *
 * Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query
 * parameter), mutual TLS (use of a client certificate), OAuth2's common flows (implicit, password, client credentials,
 * and authorization code) as defined in RFC6749, and OpenID Connect Discovery.  Please note that as of 2020, the
 * implicit flow is about to be deprecated by OAuth 2.0 Security Best Current Practice.
 *
 * Recommended for most use case is Authorization Code Grant flow with PKCE.
 *
 * {@link https://spec.openapis.org/oas/latest.html#security-scheme-object}
 */
export class SecurityScheme {
  private _type: string; // Required
  private _description: any;
  private _name: string; // Required
  private _in: string; // Required
  private _scheme: string; // Required
  private _bearerFormat: string;
  private _flows: OAuthFlows; // Required
  private _openIdConnectUrl: string; // Required

  constructor() {
    this._flows = new OAuthFlows();
  }

  /**
   * Parses a segment of an OpenAPI document containing an `SecurityScheme`.
   *
   * @param segment `SecurityScheme` OpenAPI segment.
   * @returns `SecurityScheme` object populated with the provided segment.
   */
  public static parse(segment: any): SecurityScheme {
    const obj = new SecurityScheme();

    if (!segment['type']) {
      throw new ParsingError('SecurityScheme segment is missing required "type"');
    }

    const lowerType = segment['type'].toLowerCase();

    if (lowerType === 'apikey') {
      if (!segment['name']) {
        throw new ParsingError('SecurityScheme segment is missing required "name"');
      }

      if (!segment['in']) {
        throw new ParsingError('SecurityScheme segment is missing required "in"');
      }
    }

    if (lowerType === 'http') {
      if (!segment['scheme']) {
        throw new ParsingError('SecurityScheme segment is missing required "scheme"');
      }
    }

    if (lowerType === 'oauth2') {
      if (!segment['flows']) {
        throw new ParsingError('SecurityScheme segment is missing required "flows"');
      }
    }

    if (lowerType === 'openidconnect') {
      if (!segment['openIdConnectUrl']) {
        throw new ParsingError('SecurityScheme segment is missing required "openIdConnectUrl"');
      }
    }

    if (
      lowerType !== 'apikey' &&
      lowerType !== 'http' &&
      lowerType !== 'mutualtls' &&
      lowerType !== 'oauth2' &&
      lowerType !== 'openidconnect'
    ) {
      throw new ParsingError(`SecurityScheme segment value for "type" unexpected value: ${segment['type']}`);
    }

    obj.setType(segment['type']);
    obj.setDescription(segment['description'] ?? null);
    obj.setName(segment['name'] ?? null);
    obj.setIn(segment['in'] ?? null);
    obj.setScheme(segment['scheme'] ?? null);
    obj.setBearerFormat(segment['bearerFormat'] ?? null);
    obj.setFlows(segment['flows'] ? OAuthFlows.parse(segment['flows']) : null);
    obj.setOpenIdConnectUrl(segment['openIdConnectUrl'] ?? null);

    return obj;
  }

  /** Retrieves the type. */
  public getType = (): string => this._type;

  /** Retrieves the description. */
  public getDescription = (): string => this._description;

  /** Retrieves the name. */
  public getName = (): string => this._name;

  /** Retrieves the location of the API key. */
  public getIn = (): string => this._in;

  /** Retrieves the scheme. */
  public getScheme = (): string => this._scheme;

  /** Retrieves the bearer format. */
  public getBearerFormat = (): string => this._bearerFormat;

  /** Retrieves the OAuthFlows objects. */
  public getFlows = (): OAuthFlows => this._flows;

  /** Retrieves the openIdConnectUrl. */
  public getOpenIdConnectUrl = (): string => this._openIdConnectUrl;

  /** _*REQUIRED*_.  Sets the type of security scheme: `apiKey`, `http`, `mutualTLS`, `oauth2`, and `openIdConnect`. */
  public setType = (type: string) => (this._type = type);

  /** Sets the description for the security scheme.  CommonMark syntax _MAY_ be used for rich text representation. */
  public setDescription = (description: string) => (this._description = description);

  /** _*REQUIRED*_.  Sets the name of the header, query, or cookie parameter to be used. */
  public setName = (name: string) => (this._name = name);

  /** _*REQUIRED*_.  Sets the location of the API key.  Valid values are `query`, `header`, or `cookie`. */
  public setIn = (_in: string) => (this._in = _in);

  /** _*REQUIRED*_.  Sets the name of the HTTP Authorization scheme to be used in the Authorization header as defined in RFC7235. */
  public setScheme = (scheme: string) => (this._scheme = scheme);

  /** Sets a hint to the client to identify how the bearer token is to be formatted. */
  public setBearerFormat = (bearerFormat: string) => (this._bearerFormat = bearerFormat);

  /** _*REQUIRED*_.  Sets an object containing configuration information for the flow types supported. */
  public setFlows = (flows: OAuthFlows) => (this._flows = flows);

  /** _*REQUIRED*_.  Sets the OpenId Connect URL to discover OAuth2 configuration values. */
  public setOpenIdConnectUrl = (openIdConnectUrl: string) => (this._openIdConnectUrl = openIdConnectUrl);

  toString() {
    return (
      `[SecurityScheme] _type=${this._type} _description=${this._description} _name=${this._name} _in=${this._in} _scheme=${this._scheme} ` +
      `_bearerFormat=${this._bearerFormat} _flows=${this._flows} _openIdConnectUrl=${this._openIdConnectUrl}`
    );
  }
}
