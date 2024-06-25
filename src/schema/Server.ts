import { ServerVariable } from './sub';
import { ParsingError } from '.';

// Covers 4.8.5.1 Hashmap definition
export type ServerVariablesMap = {
  [key in string]: ServerVariable;
};

/**
 * Server is a section of the OpenAPI that defines an object representing a server.
 *
 * {@link https://spec.openapis.org/oas/latest.html#server-object}
 */
export class Server {
  private _url: string; // Required
  private _description: string;
  private _variables: ServerVariablesMap;

  constructor() {
    this._variables = {};
  }

  /**
   * Parses a segment of an OpenAPI document containing an `Server`.
   *
   * @param segment `Server` OpenAPI segment.
   * @returns `Server` object populated with the provided segment.
   */
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


  /** Retrieves the URL. */
  public getUrl = (): string => this._url;

  /** Retrieves the description. */
  public getDescription = (): string => this._description;

  /** Retrieves a map of variables. */
  public getVariables = (): ServerVariablesMap => this._variables;

  /** _*REQUIRED*_.  Sets the URL to the target host. */
  public setUrl = (url: string) => (this._url = url);

  /** Sets an optional string describing the host designated by the URL.  CommonMark syntax _MAY_ be used for rich text representation. */
  public setDescription = (description: string) => (this._description = description);

  /** Sets a map between the variable name and its value. */
  public setVariables = (variables: ServerVariablesMap) => (this._variables = variables);

  toString() {
    return `[Server]: _url=${this._url} _description=${this._description} _variables=${this._variables}`;
  }
}
