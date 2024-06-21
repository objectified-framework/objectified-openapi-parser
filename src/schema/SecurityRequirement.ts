// Covers 4.8.30.1
export class SecurityRequirement {
  private _name: string;
  private _declarations: string[];

  constructor() {
    this._declarations = [];
  }

  public parse(segment: any): SecurityRequirement {
    const obj = new SecurityRequirement();

    return obj;
  }

  public getName = (): string => this._name;
  public getDeclarations = (): string[] => this._declarations;

  public setName = (name: string) => (this._name = name);
  public setDeclarations = (declarations: string[]) => (this._declarations = declarations);
}
