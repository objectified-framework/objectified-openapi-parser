import { ExternalDocumentation } from '.';

// Covers 4.8.22.1
export class Tag {
  private _name: string; // Required
  private _description: string;
  private _externalDocs: ExternalDocumentation;

  constructor() {
    this._externalDocs = new ExternalDocumentation();
  }

  public getName = (): string => this._name;
  public getDescription = (): string => this._description;
  public getExternalDocs = (): ExternalDocumentation => this._externalDocs;

  public setName = (name: string) => (this._name = name);
  public setDescription = (description: string) => (this._description = description);
  public setExternalDocs = (externalDocs: ExternalDocumentation) => (this._externalDocs = externalDocs);
}
