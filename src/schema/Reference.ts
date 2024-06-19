// Covers 4.8.23.1
export class Reference {
  public _ref: string; // Required
  public _summary: string;
  public _description: string;

  constructor() {}

  public getRef = (): string => this._ref;
  public getSummary = (): string => this._summary;
  public getDescription = (): string => this._description;

  public setRef = (ref: string) => (this._ref = ref);
  public setSummary = (summary: string) => (this._summary = summary);
  public setDescription = (description: string) => (this._description = description);
}
