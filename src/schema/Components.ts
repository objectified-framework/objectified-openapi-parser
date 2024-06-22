import {
  CallbackOrReferenceMap,
  ExampleOrReferenceMap,
  HeaderOrReferenceMap,
  LinkOrReferenceMap,
  ParameterOrReferenceMap,
  PathItemOrReferenceMap,
  RequestBodyOrReferenceMap,
  ResponseOrReferenceMap,
  SchemaMap,
  SecuritySchemeOrReferenceMap,
} from '.';

// Covers 4.8.7.1
export class Components {
  private _schemas: SchemaMap;
  private _responses: ResponseOrReferenceMap;
  private _parameters: ParameterOrReferenceMap;
  private _examples: ExampleOrReferenceMap;
  private _requestBodies: RequestBodyOrReferenceMap;
  private _headers: HeaderOrReferenceMap;
  private _securitySchemes: SecuritySchemeOrReferenceMap;
  private _links: LinkOrReferenceMap;
  private _callbacks: CallbackOrReferenceMap;
  private _pathItems: PathItemOrReferenceMap;

  constructor() {
    this._schemas = {};
    this._responses = {};
    this._parameters = {};
    this._examples = {};
    this._requestBodies = {};
    this._headers = {};
    this._securitySchemes = {};
    this._links = {};
    this._callbacks = {};
    this._pathItems = {};
  }

  public static parse(segment: any): Components {
    const obj = new Components();

    return obj;
  }

  public getSchemas = (): SchemaMap => this._schemas;
  public getResponses = (): ResponseOrReferenceMap => this._responses;
  public getParameters = (): ParameterOrReferenceMap => this._parameters;
  public getExamples = (): ExampleOrReferenceMap => this._examples;
  public getRequestBodies = (): RequestBodyOrReferenceMap => this._requestBodies;
  public getHeaders = (): HeaderOrReferenceMap => this._headers;
  public getSecuritySchemes = (): SecuritySchemeOrReferenceMap => this._securitySchemes;
  public getLinks = (): LinkOrReferenceMap => this._links;
  public getCallbacks = (): CallbackOrReferenceMap => this._callbacks;
  public getPathItems = (): PathItemOrReferenceMap => this._pathItems;

  public setSchemas = (schemas: SchemaMap) => (this._schemas = schemas);
  public setResponses = (responses: ResponseOrReferenceMap) => (this._responses = responses);
  public setParameters = (parameters: ParameterOrReferenceMap) => (this._parameters = parameters);
  public setExamples = (examples: ExampleOrReferenceMap) => (this._examples = examples);
  public setRequestBodies = (requestBodies: RequestBodyOrReferenceMap) => (this._requestBodies = requestBodies);
  public setHeaders = (headers: HeaderOrReferenceMap) => (this._headers = headers);
  public setSecuritySchemes = (securitySchemes: SecuritySchemeOrReferenceMap) => (this._securitySchemes = securitySchemes);
  public setLinks = (links: LinkOrReferenceMap) => (this._links = links);
  public setCallbacks = (callbacks: CallbackOrReferenceMap) => (this._callbacks = callbacks);
  public setPathItems = (pathItems: PathItemOrReferenceMap) => (this._pathItems = pathItems);
}
