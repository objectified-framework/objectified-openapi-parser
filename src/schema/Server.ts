import { ServerVariable } from '.';
import { ParsingError } from '../ParsingError';

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

  public static parse(segment: any): Server {
    const obj = new Server();

    if (!segment['url']) {
      throw new ParsingError('Server segment is missing required "url"');
    }

    obj.setUrl(segment['url']);
    obj.setDescription(segment['description'] ?? null);

    if (segment['variables']) {
      for (const key of Object.keys(segment['variables'])) {
        const value = segment['variables'][key];

        obj.getVariables()[key] = ServerVariable.parse(value);
      }
    }

    return obj;
  }

  public getUrl = (): string => this._url;
  public getDescription = (): string => this._description;
  public getVariables = (): ServerVariablesMap => this._variables;

  public setUrl = (url: string) => (this._url = url);
  public setDescription = (description: string) => (this._description = description);
  public setVariables = (variables: ServerVariablesMap) => (this._variables = variables);

  toString() {
    return `[Server]: _url=${this._url} _description=${this._description} _variables=${this._variables}`;
  }
}
