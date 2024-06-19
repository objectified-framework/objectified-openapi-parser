// Covers 4.8.30.1
export type SecurityRequirementHash = {
  [key in string]: string[];
};

// Covers 4.8.30.1
export class SecurityRequirement {
  private _hash: SecurityRequirementHash;

  constructor() {
    this._hash = {};
  }

  public getByKey = (key: string): string[] => this._hash[key] ?? [];

  public setValueForKey = (key: string, value: string) => {
    if (!this._hash[key]) {
      this._hash[key] = [];
    }

    this._hash[key].push(value);
  };
}
