import { Callback, CallbackOrReferenceMap, Responses, Server } from '.';
import { ExternalDocumentation, Parameter, Reference, RequestBody, SecurityRequirement } from './sub';

/**
 * Operation is a section of the OpenAPI that describes a single API operation on a path.
 *
 * {@link https://spec.openapis.org/oas/latest.html#operation-object}
 */
export class Operation {
  private _tags: string[];
  private _summary: string;
  private _description: string;
  private _externalDocs: ExternalDocumentation;
  private _operationId: string;
  private _parameters: Parameter[] & Reference[];
  private _requestBody: RequestBody | Reference;
  private _responses: Responses;
  private _callbacks: CallbackOrReferenceMap;
  private _deprecated: boolean;
  private _security: SecurityRequirement[];
  private _servers: Server[];

  constructor() {
    this._externalDocs = new ExternalDocumentation();
    this._parameters = [];
    this._requestBody = null;
    this._responses = new Responses();
    this._callbacks = {};
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

    if (segment['callbacks']) {
      for (const key of segment['callbacks']) {
        const value = segment['callbacks'][key];

        if (Reference.isReference(value)) {
          obj.getCallbacks()[key] = Reference.parse(value);
        } else {
          obj.getCallbacks()[key] = Callback.parse(value);
        }
      }
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

  /** Retrieves the tags. */
  public getTags = (): string[] => this._tags;

  /** Retrieves the summary. */
  public getSummary = (): string => this._summary;

  /** Retrieves the description. */
  public getDescription = (): string => this._description;

  /** Retrieves external documentation. */
  public getExternalDocs = (): ExternalDocumentation => this._externalDocs;

  /** Retrieves the operation ID. */
  public getOperationId = (): string => this._operationId;

  /** Retrieves parameters associated with the operation. */
  public getParameters = (): Parameter[] & Reference[] => this._parameters;

  /** Retrieves the request body definition or its reference. */
  public getRequestBody = (): RequestBody | Reference => this._requestBody;

  /** Retrieves responses provided by this operation. */
  public getResponses = (): Responses => this._responses;

  /** Retrieves callbacks. */
  public getCallbacks = (): CallbackOrReferenceMap => this._callbacks;

  /** Flag indicating if this operation is deprecated. */
  public isDeprecated = (): boolean => this._deprecated;

  /** Retrieves security requirements list for this operation. */
  public getSecurity = (): SecurityRequirement[] => this._security;

  /** Retrieves the list of servers. */
  public getServers = (): Server[] => this._servers;

  /** Sets a list of tags for tAPI documentation control. */
  public setTags = (tags: string[]) => (this._tags = tags);

  /** Sets a short summary of what the operation does. */
  public setSummary = (summary: string) => (this._summary = summary);

  /** Sets a verbose explanation of the operation behavior.  CommonMark syntax _MAY_ be used for rich text representation. */
  public setDescription = (description: string) => (this._description = description);

  /** Sets additional external documentation for this operation. */
  public setExternalDocs = (externalDocs: ExternalDocumentation) => (this._externalDocs = externalDocs);

  /** Sets a unique string used to identify the operation.  The ID _MUST_ be unique among all operations described in the API. */
  public setOperationId = (operationId: string) => (this._operationId = operationId);

  /** Sets a list of parameters that are applicable for this operation, or a reference. */
  public setParameters = (parameters: Parameter[] & Reference[]) => (this._parameters = parameters);

  /** Sets the request body or reference applicable for this operation. */
  public setRequestBody = (requestBody: RequestBody | Reference) => (this._requestBody = requestBody);

  /** Sets the list of possible responses as they are returned from executing this operation. */
  public setResponses = (responses: Responses) => (this._responses = responses);

  /** Sets a map of possible out-of band callbacks related to the parent operation. */
  public setCallbacks = (callbacks: CallbackOrReferenceMap) => (this._callbacks = callbacks);

  /** Sets flag indicating if this operation is deprecated. */
  public setDeprecated = (deprecated: boolean) => (this._deprecated = deprecated);

  /** Sets a declaration of which security mechanisms can be used for this operation. */
  public setSecurity = (security: SecurityRequirement[]) => (this._security = security);

  /** Sets an alternative `Server` array to service this operation. */
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
