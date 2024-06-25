import { Components, Info, Paths, Server, ParsingError } from '.';
import { ExternalDocumentation, PathItem, Reference, SecurityRequirement, Tag } from './sub';

// Covers 4.8.1.1
export type WebHooksMap = {
  [key in string]: PathItem | Reference;
};

/**
 * OpenAPI is a section of the OpenAPI that describes the root object of the OpenAPI document or specification.
 *
 * {@link https://spec.openapis.org/oas/latest.html#openapi-object}
 */
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

  /**
   * Parses a segment of an OpenAPI document containing an `OpenAPI`.
   *
   * @param segment `OpenAPI` OpenAPI segment.
   * @returns `OpenAPI` object populated with the provided segment.
   */
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
      for (const value of segment['servers']) {
        obj.getServers().push(Server.parse(value));
      }
    }

    if (segment['paths']) {
      obj.setPaths(Paths.parse(segment['paths']));
    }

    if (segment['webhooks']) {
      for (const key of Object.keys(segment['webhooks'])) {
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
      for (const value of segment['security']) {
        obj.getSecurity().push(SecurityRequirement.parse(value));
      }
    }

    if (segment['tags']) {
      for (const value of segment['tags']) {
        obj.getTags().push(Tag.parse(value));
      }
    }

    if (segment['externalDocs']) {
      obj.setExternalDocs(ExternalDocumentation.parse(segment['externalDocs']));
    }

    return obj;
  }

  /** Retrieves the openapi document version. */
  public getOpenApi = (): string => this._openapi;

  /** Retrieves the info object. */
  public getInfo = (): Info => this._info;

  /** Retrieves the JSON schema dialect. */
  public getJsonSchemaDialect = (): string => this._jsonSchemaDialect;

  /** Retrieves a list of servers. */
  public getServers = (): Server[] => this._servers;

  /** Retrieves a list of paths. */
  public getPaths = (): Paths => this._paths;

  /** Retrieves a mapping of webhooks to a `PathItem` or `Reference`. */
  public getWebhooks = (): WebHooksMap => this._webhooks;

  /** Retrieves the components schema. */
  public getComponents = (): Components => this._components;

  /** Retrieves the security requirement information. */
  public getSecurity = (): SecurityRequirement[] => this._security;

  /** Retrieves the tag definitions. */
  public getTags = (): Tag[] => this._tags;

  /** Retrieves the external documentation. */
  public getExternalDocs = (): ExternalDocumentation => this._externalDocs;

  /** _*REQUIRED*_. Sets the version of the API spec that this object conforms to. */
  public setOpenApi = (openapi: string) => (this._openapi = openapi);

  /** _*REQUIRED*_. Sets the provided metadata about the API. */
  public setInfo = (info: Info) => (this._info = info);

  /** Sets the default value for the `$schema` keyword within `Schema` objects contained within this OpenAPI Spec. */
  public setJsonSchemaDialect = (jsonSchemaDialect: string) => (this._jsonSchemaDialect = jsonSchemaDialect);

  /** Sets an array of server objects. */
  public setServers = (servers: Server[]) => (this._servers = servers);

  /** Sets the available paths and operations for the API. */
  public setPaths = (paths: Paths) => (this._paths = paths);

  /** Sets the incoming webhooks that _MAY_ be received as part of this API and that the API consumer _MAY_ choose to implement. */
  public setWebhooks = (webhooks: WebHooksMap) => (this._webhooks = webhooks);

  /** Sets the various schema definitions for this spec. */
  public setComponents = (components: Components) => (this._components = components);

  /** Sets the security mechanisms list that can be used across this API. */
  public setSecurity = (security: SecurityRequirement[]) => (this._security = security);

  /** Sets the definition of tags used by the document with additional metadata. */
  public setTags = (tags: Tag[]) => (this._tags = tags);

  /** Sets external documentation. */
  public setExternalDocs = (externalDocs: ExternalDocumentation) => (this._externalDocs = externalDocs);

  toString(): string {
    return (
      `[OpenAPI]: _openapi=${this._openapi} _info=${this._info} _jsonSchemaDialect=${this._jsonSchemaDialect} ` +
      `_servers=${this._servers} _paths=${this._paths} _webhooks=${this._webhooks} _components=${this._components} ` +
      `_security=${this._security} _tags=${this._tags} _externalDocs=${this._externalDocs}`
    );
  }
}
