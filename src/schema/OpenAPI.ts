import { Components, ExternalDocumentation, Info, PathItem, Paths, Reference, SecurityRequirement, Server, Tag } from '.';
import { ParsingError } from '../ParsingError';

// Covers 4.8.1.1
export type WebHooksMap = {
  [key in string]: PathItem | Reference;
};

// Covers 4.8.1.1
//
// This is the top level parsing structure.  Any OpenAPI specs should be passed to the `parse` function in this
// class, as it is from where parsing starts.
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

  public static parse(segment: any): OpenAPI {
    const obj = new OpenAPI();

    if (!segment['openapi']) {
      throw new ParsingError('OpenAPI spec is missing top-level "openapi" version');
    }

    if (!segment['info']) {
      throw new ParsingError('OpenAPI spec is missing top-level "info" definition');
    }

    obj.setOpenApi(segment['openapi']);
    obj.setInfo(segment['info']);
    obj.setJsonSchemaDialect(segment['jsonSchemaDialect'] ?? false);

    if (segment['servers']) {
      for(const value of segment['servers']) {
        obj.getServers().push(Server.parse(value));
      }
    }

    if (segment['paths']) {
      obj.setPaths(Paths.parse(segment['paths']));
    }

    if (segment['webhooks']) {
      for(const key of Object.keys(segment['webhooks'])) {
        const value = segment['webhooks'][key];

        if (Reference.isReference(value)) {
          obj.getWebhooks()[key] = Reference.parse(value);
        } else {
          obj.getWebhooks()[key] = PathItem.parse(value);
        }
      }
    }

    if (segment['components']) {
      obj.setComponents(Components.parse(segment['components']));
    }

    if (segment['security']) {
      for(const value of segment['security']) {
        obj.getSecurity().push(SecurityRequirement.parse(value));
      }
    }

    if (segment['tags']) {
      for(const value of segment['tags']) {
        obj.getTags().push(Tag.parse(value));
      }
    }

    if (segment['externalDocs']) {
      obj.setExternalDocs(ExternalDocumentation.parse(segment['externalDocs']));
    }

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

  toString(): string {
    return (
      `[OpenAPI]: _openapi=${this._openapi} _info=${this._info} _jsonSchemaDialect=${this._jsonSchemaDialect} ` +
      `_servers=${this._servers} _paths=${this._paths} _webhooks=${this._webhooks} _components=${this._components} ` +
      `_security=${this._security} _tags=${this._tags} _externalDocs=${this._externalDocs}`
    );
  }
}
