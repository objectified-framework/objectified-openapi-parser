// Covers 4.8.30.1
export class SecurityRequirement {
  private _name: string;
  private _declarations: string[];

  constructor() {
    this._declarations = [];
  }

  public static parse(segment: any): SecurityRequirement {
    const obj = new SecurityRequirement();
    const key = Object.keys(segment)[0];
    const value = segment[key];

    obj.setName(key);
    obj.setDeclarations(value);

    return obj;
  }

  public getName = (): string => this._name;
  public getDeclarations = (): string[] => this._declarations;

  public setName = (name: string) => (this._name = name);
  public setDeclarations = (declarations: string[]) => (this._declarations = declarations);

  toString() {
    return `[SecurityRequirement] _name=${this._name} _declarations=${this._declarations}`;
  }
}
