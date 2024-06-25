import { Server } from '.';
import { Reference } from './sub';

export type ParametersMap = {
  [key in string]: any | string;
};

export type LinkOrReferenceMap = {
  [key in string]: Link | Reference;
};

/**
 * Link is a section of the OpenAPI that represents a possible design-time link for a response.  The presence of a link
 * does not guarantee the caller's ability to successfully invoke it, rather it provides a known relationship and traversal
 * mechanism between responses and other operations.
 *
 * Unlike _dynamic_ links (i.e. links provided **in** the response payload), the OpenAPI Spec linking mechanism does not
 * require link information in the runtime response.
 *
 * For computing links, and providing instructions to execute them, a _runtime expression_ is used for accessing values
 * in an operation and using them as parameters while invoking the linked operation.
 *
 * {@link https://spec.openapis.org/oas/latest.html#link-object}
 */
export class Link {
  private _operationRef: string;
  private _operationId: string;
  private _parameters: ParametersMap;
  private _requestBody: any | string;
  private _description: string;
  private _server: Server;

  constructor() {
    this._parameters = {};
    this._server = new Server();
  }

  /**
   * Parses a segment of an OpenAPI document containing an `Link`.
   *
   * @param segment `Link` OpenAPI segment.
   * @returns `Link` object populated with the provided segment.
   */
  public static parse(segment: any): Link {
    const obj = new Link();

    obj.setOperationRef(segment['operationRef'] ?? null);
    obj.setOperationId(segment['operationId'] ?? null);

    if (segment['parameters']) {
      for (const key of Object.keys(segment['parameters'])) {
        const value = segment['parameters'][key];

        obj.getParameters()[key] = value;
      }
    }

    obj.setRequestBody(segment['requestBody'] ?? null);
    obj.setDescription(segment['description'] ?? null);

    if (segment['server']) {
      obj.setServer(Server.parse(segment['server']));
    }

    return obj;
  }

  /** Retrieves the operation reference. */
  public getOperationRef = (): string => this._operationRef;

  /** Retrieves the operation ID. */
  public getOperationId = (): string => this._operationId;

  /** Retrieves the map of parameters. */
  public getParameters = (): ParametersMap => this._parameters;

  /** Retrieves the map of request body and object or string. */
  public getRequestBody = (): any | string => this._requestBody;

  /** Retrieves the description. */
  public getDescription = (): string => this._description;

  /** Retrieves the server declaration. */
  public getServer = (): Server => this._server;

  /** Sets a relatin or absolute URI reference to an OpenAPI Spec operation. */
  public setOperationRef = (operationRef: string) => (this._operationRef = operationRef);

  /** Sets the name of an _existing_, resolvable OpenAPI Spec operation, as defined with a unique `operationId`. */
  public setOperationId = (operationId: string) => (this._operationId = operationId);

  /** Sets a map representing parametesr to pass to an operation as specified with `operationId` or identified via `operationRef`. */
  public setParameters = (parameters: ParametersMap) => (this._parameters = parameters);

  /** Sets a literal value or expression to use as a request body when calling the target operation. */
  public setRequestBody = (requestBody: any | string) => (this._requestBody = requestBody);

  /** Sets the description of the link.  CommonMark syntax _MAY_ be used for rich text representation. */
  public setDescription = (description: string) => (this._description = description);

  /** Sets a server object to be used by the target operation. */
  public setServer = (server: Server) => (this._server = server);

  toString() {
    return (
      `[Link] _operationRef=${this._operationRef} _operationId=${this._operationId} _parameters=${this._parameters} ` +
      `_requestBody=${this._requestBody} _description=${this._description} _server=${this._server}`
    );
  }
}
