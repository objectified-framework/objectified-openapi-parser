import { OAuthFlows, Reference } from '.';
import { ParsingError } from '../ParsingError';

export type SecuritySchemeOrReferenceMap = {
  [key in string]: SecurityScheme | Reference;
};

// Covers 4.8.27.1
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

  public static parse(segment: any): SecurityScheme {
    const obj = new SecurityScheme();

    if (!segment['type']) {
      throw new ParsingError('SecurityScheme segment is missing required "type"');
    }

    if (segment['type'].toLowerCase() === 'apikey') {
      if (!segment['name']) {
        throw new ParsingError('SecurityScheme segment is missing required "name"');
      }
    }

    if (segment['type'].toLowerCase() === 'apikey') {
      if (!segment['in']) {
        throw new ParsingError('SecurityScheme segment is missing required "in"');
      }
    }

    if (segment['type'].toLowerCase() === 'http') {
      if (!segment['scheme']) {
        throw new ParsingError('SecurityScheme segment is missing required "scheme"');
      }
    }

    if (segment['type'].toLowerCase() === 'oauth2') {
      if (!segment['flows']) {
        throw new ParsingError('SecurityScheme segment is missing required "flows"');
      }
    }

    if (segment['type'].toLowerCase() === 'openidconnect') {
      if (!segment['openIdConnectUrl']) {
        throw new ParsingError('SecurityScheme segment is missing required "openIdConnectUrl"');
      }
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

  public getType = (): string => this._type;
  public getDescription = (): string => this._description;
  public getName = (): string => this._name;
  public getIn = (): string => this._in;
  public getScheme = (): string => this._scheme;
  public getBearerFormat = (): string => this._bearerFormat;
  public getFlows = (): OAuthFlows => this._flows;
  public getOpenIdConnectUrl = (): string => this._openIdConnectUrl;

  public setType = (type: string) => (this._type = type);
  public setDescription = (description: string) => (this._description = description);
  public setName = (name: string) => (this._name = name);
  public setIn = (_in: string) => (this._in = _in);
  public setScheme = (scheme: string) => (this._scheme = scheme);
  public setBearerFormat = (bearerFormat: string) => (this._bearerFormat = bearerFormat);
  public setFlows = (flows: OAuthFlows) => (this._flows = flows);
  public setOpenIdConnectUrl = (openIdConnectUrl: string) => (this._openIdConnectUrl = openIdConnectUrl);

  toString() {
    return (
      `[SecurityScheme] _type=${this._type} _description=${this._description} _name=${this._name} _in=${this._in} _scheme=${this._scheme} ` +
      `_bearerFormat=${this._bearerFormat} _flows=${this._flows} _openIdConnectUrl=${this._openIdConnectUrl}`
    );
  }
}
