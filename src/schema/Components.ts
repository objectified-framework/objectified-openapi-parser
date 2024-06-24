import {
  CallbackOrReferenceMap,
  LinkOrReferenceMap,
  Schema,
  SchemaMap,
  SecuritySchemeOrReferenceMap,
  SecurityScheme,
  Link,
  Callback,
} from '.';
import {
  ExampleOrReferenceMap,
  HeaderOrReferenceMap,
  ParameterOrReferenceMap,
  PathItemOrReferenceMap,
  RequestBodyOrReferenceMap,
  ResponseOrReferenceMap,
  Response,
  Parameter,
  Reference,
  Example,
  RequestBody,
  Header,
  PathItem,
} from './sub';

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

  /**
   * Parses a segment of an OpenAPI document containing an `Components`.
   *
   * @param segment `Components` OpenAPI segment.
   * @returns `Components` object populated with the provided segment.
   */
  public static parse(segment: any): Components {
    const obj = new Components();

    if (segment['schemas']) {
      for (const key of Object.keys(segment['schemas'])) {
        const value = segment['schemas'][key];

        obj.getSchemas()[key] = Schema.parse(value);
      }
    }

    if (segment['responses']) {
      for (const key of Object.keys(segment['responses'])) {
        const value = segment['responses'][key];

        obj.getResponses()[key] = Response.parse(value);
      }
    }

    if (segment['parameters']) {
      for (const key of Object.keys(segment['parameters'])) {
        const value = segment['parameters'][key];

        obj.getParameters()[key] = Parameter.parse(value);
      }
    }

    if (segment['examples']) {
      for (const key of Object.keys(segment['examples'])) {
        const value = segment['examples'][key];

        if (Reference.isReference(value)) {
          obj.getExamples()[key] = Reference.parse(value);
        } else {
          obj.getExamples()[key] = Example.parse(value);
        }
      }
    }

    if (segment['requestBodies']) {
      for (const key of Object.keys(segment['requestBodies'])) {
        const value = segment['requestBodies'][key];

        if (Reference.isReference(value)) {
          obj.getRequestBodies()[key] = Reference.parse(value);
        } else {
          obj.getRequestBodies()[key] = RequestBody.parse(value);
        }
      }
    }

    if (segment['headers']) {
      for (const key of Object.keys(segment['headers'])) {
        const value = segment['headers'][key];

        if (Reference.isReference(value)) {
          obj.getHeaders()[key] = Reference.parse(value);
        } else {
          obj.getHeaders()[key] = Header.parse(value);
        }
      }
    }

    if (segment['securitySchemes']) {
      for (const key of Object.keys(segment['securitySchemes'])) {
        const value = segment['securitySchemes'][key];

        if (Reference.isReference(value)) {
          obj.getSecuritySchemes()[key] = Reference.parse(value);
        } else {
          obj.getSecuritySchemes()[key] = SecurityScheme.parse(value);
        }
      }
    }

    if (segment['links']) {
      for (const key of Object.keys(segment['links'])) {
        const value = segment['links'][key];

        if (Reference.isReference(value)) {
          obj.getLinks()[key] = Reference.parse(value);
        } else {
          obj.getLinks()[key] = Link.parse(value);
        }
      }
    }

    if (segment['callbacks']) {
      for (const key of Object.keys(segment['callbacks'])) {
        const value = segment['callbacks'][key];

        if (Reference.isReference(value)) {
          obj.getCallbacks()[key] = Reference.parse(value);
        } else {
          obj.getCallbacks()[key] = Callback.parse(value);
        }
      }
    }

    if (segment['pathItems']) {
      for (const key of Object.keys(segment['pathItems'])) {
        const value = segment['pathItems'][key];

        if (Reference.isReference(value)) {
          obj.getPathItems()[key] = Reference.parse(value);
        } else {
          obj.getPathItems()[key] = PathItem.parse(value);
        }
      }
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
