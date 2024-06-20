import { Server } from '.';

export type ParametersMap = {
  [key in string]: any | string;
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
}
