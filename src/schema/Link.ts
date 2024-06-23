import { Reference, Server } from '.';

export type ParametersMap = {
  [key in string]: any | string;
};

export type LinkOrReferenceMap = {
  [key in string]: Link | Reference;
};

// Covers 4.8.20.1
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

  public static parse(segment: any): Link {
    const obj = new Link();

    obj.setOperationRef(segment['operationRef'] ?? null);
    obj.setOperationId(segment['operationId'] ?? null);

    if (segment['parameters']) {
      for(const key of Object.keys(segment['parameters'])) {
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

  public getOperationRef = (): string => this._operationRef;
  public getOperationId = (): string => this._operationId;
  public getParameters = (): ParametersMap => this._parameters;
  public getRequestBody = (): any | string => this._requestBody;
  public getDescription = (): string => this._description;
  public getServer = (): Server => this._server;

  public setOperationRef = (operationRef: string) => (this._operationRef = operationRef);
  public setOperationId = (operationId: string) => (this._operationId = operationId);
  public setParameters = (parameters: ParametersMap) => (this._parameters = parameters);
  public setRequestBody = (requestBody: any | string) => (this._requestBody = requestBody);
  public setDescription = (description: string) => (this._description = description);
  public setServer = (server: Server) => (this._server = server);

  toString() {
    return (
      `[Link] _operationRef=${this._operationRef} _operationId=${this._operationId} _parameters=${this._parameters} ` +
      `_requestBody=${this._requestBody} _description=${this._description} _server=${this._server}`
    );
  }
}
