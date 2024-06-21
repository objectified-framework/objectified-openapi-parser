import { ExternalDocumentation, Parameter, Reference, RequestBody, Responses, SecurityRequirement, Server } from '.';

// Covers 4.8.10.1
export class Operation {
  private _tags: string[];
  private _summary: string;
  private _description: string;
  private _externalDocs: ExternalDocumentation;
  private _operationId: string;
  private _parameters: Parameter[] | Reference[];
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

  public parse(segment: any): Operation {
    const obj = new Operation();

    return obj;
  }

  public getTags = (): string[] => this._tags;
  public getSummary = (): string => this._summary;
  public getDescription = (): string => this._description;
  public getExternalDocs = (): ExternalDocumentation => this._externalDocs;
  public getOperationId = (): string => this._operationId;
  public getParameters = (): Parameter[] | Reference[] => this._parameters;
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
  public setParameters = (parameters: Parameter[] | Reference[]) => (this._parameters = parameters);
  public setRequestBody = (requestBody: RequestBody | Reference) => (this._requestBody = requestBody);
  public setResponses = (responses: Responses) => (this._responses = responses);
  public setSecurity = (security: SecurityRequirement[]) => (this._security = security);
  public setServers = (servers: Server[]) => (this._servers = servers);
}
