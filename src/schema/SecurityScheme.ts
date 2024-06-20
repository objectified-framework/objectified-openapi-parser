import { OAuthFlows, Reference } from '.';

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
}
