import { Components, ExternalDocumentation, Info, PathItem, Paths, Reference, SecurityRequirement, Server, Tag } from '.';

// Covers 4.8.1.1
export type WebHooksMap = {
  [key in string]: PathItem | Reference;
};

// Covers 4.8.1.1
export class OpenAPI {
  private _openapi: string; // Required
  private _info: Info; // Required
  private _jsonSchemaDialect: string;
  private _servers: Server[];
  private _paths: Paths;
  private _webhooks: WebHooksMap;
  private _components: Components;
  private _security: SecurityRequirement[];
  private _tags: Tag[];
  private _externalDocs: ExternalDocumentation;

  constructor() {
    this._info = new Info();
    this._servers = [];
    this._paths = new Paths();
    this._webhooks = {};
    this._components = new Components();
    this._security = [];
    this._tags = [];
    this._externalDocs = new ExternalDocumentation();
  }

  public parse(segment: any): OpenAPI {
    const obj = new OpenAPI();

    return obj;
  }

  public getOpenApi = (): string => this._openapi;
  public getInfo = (): Info => this._info;
  public getJsonSchemaDialect = (): string => this._jsonSchemaDialect;
  public getServers = (): Server[] => this._servers;
  public getPaths = (): Paths => this._paths;
  public getWebhooks = (): WebHooksMap => this._webhooks;
  public getComponents = (): Components => this._components;
  public getSecurity = (): SecurityRequirement[] => this._security;
  public getTags = (): Tag[] => this._tags;
  public getExternalDocs = (): ExternalDocumentation => this._externalDocs;

  public setOpenApi = (openapi: string) => (this._openapi = openapi);
  public setInfo = (info: Info) => (this._info = info);
  public setJsonSchemaDialect = (jsonSchemaDialect: string) => (this._jsonSchemaDialect = jsonSchemaDialect);
  public setServers = (servers: Server[]) => (this._servers = servers);
  public setPaths = (paths: Paths) => (this._paths = paths);
  public setWebhooks = (webhooks: WebHooksMap) => (this._webhooks = webhooks);
  public setComponents = (components: Components) => (this._components = components);
  public setSecurity = (security: SecurityRequirement[]) => (this._security = security);
  public setTags = (tags: Tag[]) => (this._tags = tags);
  public setExternalDocs = (externalDocs: ExternalDocumentation) => (this._externalDocs = externalDocs);
}
