// Covers 4.8.26.1
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

  public getName = (): string => this._name;
  public getNamespace = (): string => this._namespace;
  public getPrefix = (): string => this._prefix;
  public isAttribute = (): boolean => this._attribute;
  public isWrapped = (): boolean => this._wrapped;

  public setName = (name: string) => (this._name = name);
  public setNamespace = (namespace: string) => (this._namespace = namespace);
  public setPrefix = (prefix: string) => (this._prefix = prefix);
  public setAttribute = (attribute: boolean) => (this._attribute = attribute);
  public setWrapped = (wrapped: boolean) => (this._wrapped = wrapped);

  toString() {
    return `[XML] _name=${this._name} _namespace=${this._namespace} _prefix=${this._prefix} _attribute=${this._attribute} _wrapped=${this._wrapped}`;
  }
}
