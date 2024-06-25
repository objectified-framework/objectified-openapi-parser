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

/**
 * Components is a section of the OpenAPI that holds a set of reusable objects for different aspects of the OpenAPI
 * Specification.  All objects defined within the components object will have no effect on the API unless they are
 * explicitly references from properties outside the components object.
 *
 * {@link https://spec.openapis.org/oas/latest.html#components-object}
 */
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

  /** Retrieves the schema map. */
  public getSchemas = (): SchemaMap => this._schemas;

  /** Retrieves the responses map. */
  public getResponses = (): ResponseOrReferenceMap => this._responses;

  /** Retrieves the parameters map. */
  public getParameters = (): ParameterOrReferenceMap => this._parameters;

  /** Retrieves the examples map. */
  public getExamples = (): ExampleOrReferenceMap => this._examples;

  /** Retrieves the request bodies map. */
  public getRequestBodies = (): RequestBodyOrReferenceMap => this._requestBodies;

  /** Retrieves the headers map. */
  public getHeaders = (): HeaderOrReferenceMap => this._headers;

  /** Retrieves the security schemes map. */
  public getSecuritySchemes = (): SecuritySchemeOrReferenceMap => this._securitySchemes;

  /** Retrieves the links map. */
  public getLinks = (): LinkOrReferenceMap => this._links;

  /** Retrieves the callbacks map. */
  public getCallbacks = (): CallbackOrReferenceMap => this._callbacks;

  /** Retrieves the path items map. */
  public getPathItems = (): PathItemOrReferenceMap => this._pathItems;

  /** Sets a map that holds reusable `Schema` objects. */
  public setSchemas = (schemas: SchemaMap) => (this._schemas = schemas);

  /** Sets a map that holds reusable `Response` objects. */
  public setResponses = (responses: ResponseOrReferenceMap) => (this._responses = responses);

  /** Sets a map that holds reusable `Parameter` objects. */
  public setParameters = (parameters: ParameterOrReferenceMap) => (this._parameters = parameters);

  /** Sets a map that holds reusable `Example` or `Reference` objects. */
  public setExamples = (examples: ExampleOrReferenceMap) => (this._examples = examples);

  /** Sets a map that holds reusable `RequestBody` or `Reference` objects. */
  public setRequestBodies = (requestBodies: RequestBodyOrReferenceMap) => (this._requestBodies = requestBodies);

  /** Sets a map that holds reusable `Header` or `Reference` objects. */
  public setHeaders = (headers: HeaderOrReferenceMap) => (this._headers = headers);

  /** Sets a map that holds reusable `SecurityScheme` or `Reference` objects. */
  public setSecuritySchemes = (securitySchemes: SecuritySchemeOrReferenceMap) => (this._securitySchemes = securitySchemes);

  /** Sets a map that holds reusable `Link` or `Reference` objects. */
  public setLinks = (links: LinkOrReferenceMap) => (this._links = links);

  /** Sets a map that holds reusable `Callback` or `Reference` objects. */
  public setCallbacks = (callbacks: CallbackOrReferenceMap) => (this._callbacks = callbacks);

  /** Sets a map that holds reusable `PathItem` or `Reference` objects. */
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
