/**
 * XML is a section of the OpenAPI that adds metadata that allows for a more fine-tuned XML model definition.
 *
 * When using arrays, XML element names are _not_ inferred (for singular/plural forms) and the `name` property
 * _SHOULD_ be used to add that information.
 *
 * {@link https://spec.openapis.org/oas/latest.html#xml-object}
 */
export class XML {
  private _name: string;
  private _namespace: string;
  private _prefix: string;
  private _attribute: boolean;
  private _wrapped: boolean;

  constructor() {}

  /**
   * Parses a segment of an OpenAPI document containing an `XML`.
   *
   * @param segment `XML` OpenAPI segment.
   * @returns `XML` object populated with the provided segment.
   */
  public static parse(segment: any): XML {
    const obj = new XML();

    obj.setName(segment['name'] ?? null);
    obj.setNamespace(segment['namespace'] ?? null);
    obj.setPrefix(segment['prefix'] ?? null);
    obj.setAttribute(segment['attribute'] ?? false);
    obj.setWrapped(segment['wrapped'] ?? false);

    return obj;
  }

  /** Retrieves the name. */
  public getName = (): string => this._name;

  /** Retrieves the namespace. */
  public getNamespace = (): string => this._namespace;

  /** Retrieves the prefix. */
  public getPrefix = (): string => this._prefix;

  /** Indicates whether or not the value is an attribute instead of an element. */
  public isAttribute = (): boolean => this._attribute;

  /** Indicates whether this array is wrapped. */
  public isWrapped = (): boolean => this._wrapped;

  /** Sets the name of the element/attribute used for the described schema property. */
  public setName = (name: string) => (this._name = name);

  /** Sets the URI of the namespace definition.  This _MUST_ be in the form of an absolute URI. */
  public setNamespace = (namespace: string) => (this._namespace = namespace);

  /** Sets the prefix to be used for the name. */
  public setPrefix = (prefix: string) => (this._prefix = prefix);

  /** Sets flag declaring whether the property definition translates to an attribute rather than an element. */
  public setAttribute = (attribute: boolean) => (this._attribute = attribute);

  /** Sets flag descriving whether the XML object _MAY_ be used only for an array definition. */
  public setWrapped = (wrapped: boolean) => (this._wrapped = wrapped);

  toString() {
    return `[XML] _name=${this._name} _namespace=${this._namespace} _prefix=${this._prefix} _attribute=${this._attribute} _wrapped=${this._wrapped}`;
  }
}
