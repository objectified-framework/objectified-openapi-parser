// Covers 4.8.26.1
export class XML {
  private _name: string;
  private _namespace: string;
  private _prefix: string;
  private _attribute: boolean;
  private _wrapped: boolean;

  constructor() {}

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
}
