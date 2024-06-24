/**
 * SecurityRequirement is a section of the OpenAPI that lists the required security schemes to execute an operation.
 * The name used for each property _MUST_ correspond to a security scheme declared in the `Security Schemes` under
 * the `Components` object.
 *
 * {@link https://spec.openapis.org/oas/latest.html#security-requirement-object}
 */
export class SecurityRequirement {
  private _name: string;
  private _declarations: string[];

  constructor() {
    this._declarations = [];
  }

  /**
   * Parses a segment of an OpenAPI document containing an `SecurityRequirement`.
   *
   * @param segment `SecurityRequirement` OpenAPI segment.
   * @returns `SecurityRequirement` object populated with the provided segment.
   */
  public static parse(segment: any): SecurityRequirement {
    const obj = new SecurityRequirement();
    const key = Object.keys(segment)[0];
    const value = segment[key];

    obj.setName(key);
    obj.setDeclarations(value);

    return obj;
  }

  /** Retrieves the name of the security requirement. */
  public getName = (): string => this._name;

  /** Retrieves a list of the security schemes defined for this name. */
  public getDeclarations = (): string[] => this._declarations;

  /** Sets the name of the security scheme. */
  public setName = (name: string) => (this._name = name);

  /** Sets the list of security schemes defined for the name. */
  public setDeclarations = (declarations: string[]) => (this._declarations = declarations);

  toString() {
    return `[SecurityRequirement] _name=${this._name} _declarations=${this._declarations}`;
  }
}
