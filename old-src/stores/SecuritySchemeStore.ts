import { OAuthFlowsStore } from '.';

export class SecuritySchemeStore {
  private type: string;
  private description: string;
  private name: string;
  private in: string;
  private scheme: string;
  private bearerFormat: string;
  private openIdConnectUrl: string;
  private flows: any;

  constructor(private readonly segment?: any) {
    if (segment) {
      if (!segment['type']) {
        throw new Error('SecurityScheme object lacks a type value.  Expecting apiKey, http, mutualTLS, oauth, or openIdConnect');
      }

      const lowerType = segment['type'].toLowerCase();

      switch (lowerType) {
        case 'apikey':
          this.type = 'apiKey';
          this.name = segment['name'];
          this.in = segment['in'];

          if (!this.name) {
            throw new Error('SecurityScheme requires a "name" when type is "apiKey"');
          }

          if (!this.in) {
            throw new Error('SecurityScheme requires an "in" value for type "apiKey".  Expecting query, header, or cookie');
          }

          if (this.in.toLowerCase() !== 'query' || this.in.toLowerCase() !== 'header' || this.in.toLowerCase() !== 'cookie') {
            throw new Error(`SecurityScheme requires a valid "in" value.  Got '${this.in}', expecting query, header, or cookie`);
          }
          break;

        case 'http':
          this.type = 'http';
          this.scheme = segment['scheme'];
          this.bearerFormat = segment['bearerFormat'];

          if (!this.scheme) {
            throw new Error('SecurityScheme requires a valid "scheme" value when type is "http"');
          }

          if (this.scheme.toLowerCase() == 'bearer' && !this.bearerFormat) {
            throw new Error('SecurityScheme requires a "bearerFormat" value when scheme type is "bearer"');
          }
          break;

        case 'mutualtls':
          this.type = 'mutualTLS';
          break;

        case 'oauth2':
          this.type = 'oauth2';

          if (!segment['flows']) {
            throw new Error('SecurityScheme expects a "flows" definition when type is "oauth2"');
          }

          this.flows = {};

          for (const flowKey of Object.keys(segment['flows'])) {
            this.flows[flowKey] = new OAuthFlowsStore(flowKey, segment['flows'][flowKey]);
          }
          break;

        case 'openidconnect':
          this.type = 'openIdConnect';
          this.openIdConnectUrl = segment['openIdConnectUrl'];

          if (!this.openIdConnectUrl) {
            throw new Error('SecurityScheme requires a valid "openIdConnectUrl" value when type is "openIdConnect"');
          }
          break;

        default:
          throw new Error(`Unsupported SecurityScheme type: ${segment['type']}`);
      }

      this.description = segment['description'] ?? null;
    }
  }

  public getType = (): string => this.type;
  public getDescription = (): string => this.description;
  public getName = (): string => this.name;
  public getIn = (): string => this.in;
  public getScheme = (): string => this.scheme;
  public getBearerFormat = (): string => this.bearerFormat;
  public getOpenIdConnectUrl = (): string => this.openIdConnectUrl;
  public getFlows = (): any => this.flows;

  public setType = (type: string) => (this.type = type);
  public setDescription = (description: string) => (this.description = description);
  public setName = (name: string) => (this.name = name);
  public setIn = (_in: string) => (this.in = _in);
  public setScheme = (scheme: string) => (this.scheme = scheme);
  public setBearerFormat = (bearerFormat: string) => (this.bearerFormat = bearerFormat);
  public setOpenIdConnectUrl = (openIdConnectUrl: string) => (this.openIdConnectUrl = openIdConnectUrl);
  public setFlows = (flows: any) => (this.flows = flows);
}