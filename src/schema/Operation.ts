import { Responses, Server } from '.';
import { ExternalDocumentation, Parameter, Reference, RequestBody, SecurityRequirement } from './sub';

// Covers 4.8.10.1
export class Operation {
  private _tags: string[];
  private _summary: string;
  private _description: string;
  private _externalDocs: ExternalDocumentation;
  private _operationId: string;
  private _parameters: Parameter[] & Reference[];
  private _requestBody: RequestBody | Reference;
  private _responses: Responses;
  private _deprecated: boolean;
  private _security: SecurityRequirement[];
  private _servers: Server[];

  constructor() {
    this._externalDocs = new ExternalDocumentation();
    this._parameters = [];
    this._requestBody = null;
    this._responses = new Responses();
    this._security = [];
    this._servers = [];
  }

  /**
   * Parses a segment of an OpenAPI document containing an `Operation`.
   *
   * @param segment `Operation` OpenAPI segment.
   * @returns `Operation` object populated with the provided segment.
   */
  public static parse(segment: any): Operation {
    const obj = new Operation();

    obj.setTags(segment['tags'] ?? null);
    obj.setSummary(segment['summary'] ?? null);
    obj.setDescription(segment['description'] ?? null);

    if (segment['externalDocs']) {
      obj.setExternalDocs(ExternalDocumentation.parse(segment['externalDocs']));
    }

    obj.setOperationId(segment['operationId'] ?? null);

    if (segment['parameters']) {
      for (const value of segment['parameters']) {
        if (Reference.isReference(value)) {
          obj.getParameters().push(Reference.parse(value));
        } else {
          obj.getParameters().push(Parameter.parse(value));
        }
      }
    }

    if (segment['requestBody']) {
      if (Reference.isReference(segment['requestBody'])) {
        obj.setRequestBody(Reference.parse(segment['requestBody']));
      } else {
        obj.setRequestBody(RequestBody.parse(segment['requestBody']));
      }
    }

    if (segment['responses']) {
      obj.setResponses(Responses.parse(segment['responses']));
    }

    obj.setDeprecated(segment['deprecated'] ?? false);

    if (segment['security']) {
      for (const value of segment['security']) {
        obj.getSecurity().push(SecurityRequirement.parse(value));
      }
    }

    if (segment['servers']) {
      for (const value of segment['servers']) {
        obj.getServers().push(Server.parse(value));
      }
    }

    return obj;
  }

  public getTags = (): string[] => this._tags;
  public getSummary = (): string => this._summary;
  public getDescription = (): string => this._description;
  public getExternalDocs = (): ExternalDocumentation => this._externalDocs;
  public getOperationId = (): string => this._operationId;
  public getParameters = (): Parameter[] & Reference[] => this._parameters;
  public getRequestBody = (): RequestBody | Reference => this._requestBody;
  public getResponses = (): Responses => this._responses;
  public isDeprecated = (): boolean => this._deprecated;
  public getSecurity = (): SecurityRequirement[] => this._security;
  public getServers = (): Server[] => this._servers;

  public setTags = (tags: string[]) => (this._tags = tags);
  public setSummary = (summary: string) => (this._summary = summary);
  public setDescription = (description: string) => (this._description = description);
  public setExternalDocs = (externalDocs: ExternalDocumentation) => (this._externalDocs = externalDocs);
  public setOperationId = (operationId: string) => (this._operationId = operationId);
  public setParameters = (parameters: Parameter[] & Reference[]) => (this._parameters = parameters);
  public setRequestBody = (requestBody: RequestBody | Reference) => (this._requestBody = requestBody);
  public setResponses = (responses: Responses) => (this._responses = responses);
  public setDeprecated = (deprecated: boolean) => (this._deprecated = deprecated);
  public setSecurity = (security: SecurityRequirement[]) => (this._security = security);
  public setServers = (servers: Server[]) => (this._servers = servers);

  toString() {
    return (
      `[Operation] _tags=${this._tags} _summary=${this._summary} _description=${this._description} ` +
      `_externalDocs=${this._externalDocs} _operationId=${this._operationId} _parameters=${this._parameters} ` +
      `_requestBody=${this._requestBody} _responses=${this._responses} _deprecated=${this._deprecated} ` +
      `_security=${this._security} _servers=${this._servers}`
    );
  }
}
