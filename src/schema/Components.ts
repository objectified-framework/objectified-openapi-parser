import {
  CallbackOrReferenceMap,
  ExampleOrReferenceMap,
  HeaderOrReferenceMap,
  LinkOrReferenceMap,
  ParameterOrReferenceMap,
  PathItemOrReferenceMap,
  RequestBodyOrReferenceMap,
  ResponseOrReferenceMap,
  Response,
  Schema,
  SchemaMap,
  SecuritySchemeOrReferenceMap,
  Parameter,
  Reference,
  Example,
  RequestBody,
  Header,
  SecurityScheme,
  Link,
  Callback,
  PathItem,
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

    if (segment['schemas']) {
      segment['schemas'].forEach((value, key) => (obj.getSchemas()[key] = Schema.parse(value)));
    }

    if (segment['responses']) {
      segment['responses'].forEach((value, key) => (obj.getResponses()[key] = Response.parse(value)));
    }

    if (segment['parameters']) {
      segment['parameters'].forEach((value, key) => (obj.getParameters()[key] = Parameter.parse(value)));
    }

    if (segment['examples']) {
      segment['examples'].forEach((value, key) => {
        if (Reference.isReference(value)) {
          obj.getExamples()[key] = Reference.parse(value);
        } else {
          obj.getExamples()[key] = Example.parse(value);
        }
      });
    }

    if (segment['requestBodies']) {
      segment['requestBodies'].forEach((value, key) => {
        if (Reference.isReference(value)) {
          obj.getRequestBodies()[key] = Reference.parse(value);
        } else {
          obj.getRequestBodies()[key] = RequestBody.parse(value);
        }
      });
    }

    if (segment['headers']) {
      segment['headers'].forEach((value, key) => {
        if (Reference.isReference(value)) {
          obj.getHeaders()[key] = Reference.parse(value);
        } else {
          obj.getHeaders()[key] = Header.parse(value);
        }
      });
    }

    if (segment['securitySchemes']) {
      segment['securitySchemes'].forEach((value, key) => {
        if (Reference.isReference(value)) {
          obj.getSecuritySchemes()[key] = Reference.parse(value);
        } else {
          obj.getSecuritySchemes()[key] = SecurityScheme.parse(value);
        }
      });
    }

    if (segment['links']) {
      segment['links'].forEach((value, key) => {
        if (Reference.isReference(value)) {
          obj.getLinks()[key] = Reference.parse(value);
        } else {
          obj.getLinks()[key] = Link.parse(value);
        }
      });
    }

    if (segment['callbacks']) {
      segment['callbacks'].forEach((value, key) => {
        if (Reference.isReference(value)) {
          obj.getCallbacks()[key] = Reference.parse(value);
        } else {
          obj.getCallbacks()[key] = Callback.parse(value);
        }
      });
    }

    if (segment['pathItems']) {
      segment['pathItems'].forEach((value, key) => {
        if (Reference.isReference(value)) {
          obj.getPathItems()[key] = Reference.parse(value);
        } else {
          obj.getPathItems()[key] = PathItem.parse(value);
        }
      });
    }

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

  toString() {
    return (
      `[Components] _schemas=${this._schemas} _responses=${this._responses} _parameters=${this._parameters} ` +
      `_examples=${this._examples} _requestBodies=${this._requestBodies} _headers=${this._headers} ` +
      `_securitySchemes=${this._securitySchemes} _links=${this._links} _callbacks=${this._callbacks} ` +
      `_pathItems=${this._pathItems}`
    );
  }
}
