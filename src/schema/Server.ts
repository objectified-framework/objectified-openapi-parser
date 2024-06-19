import { ServerVariable } from '.';

// Covers 4.8.5.1 Hashmap definition
export type ServerVariablesMap = {
  [key in string]: ServerVariable;
};

// Covers 4.8.5.1
export class Server {
  private _url: string; // Required
  private _description: string;
  private _variables: ServerVariablesMap;

  constructor() {
    this._variables = {};
  }

  public getUrl = (): string => this._url;
  public getDescription = (): string => this._description;
  public getVariables = (): ServerVariablesMap => this._variables;

  public setUrl = (url: string) => (this._url = url);
  public setDescription = (description: string) => (this._description = description);
  public setVariables = (variables: ServerVariablesMap) => (this._variables = variables);
}
