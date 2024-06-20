import { Operation, Parameter, Reference, Server } from '.';

// Covers 4.8.9.1
export class PathItem {
  private _ref: string;
  private _summary: string;
  private _description: string;
  private _get: Operation;
  private _put: Operation;
  private _post: Operation;
  private _delete: Operation;
  private _options: Operation;
  private _head: Operation;
  private _patch: Operation;
  private _trace: Operation;
  private _servers: Server[];
  private _parameters: Parameter[] | Reference[];

  constructor() {
    this._get = new Operation();
    this._put = new Operation();
    this._post = new Operation();
    this._delete = new Operation();
    this._options = new Operation();
    this._head = new Operation();
    this._patch = new Operation();
    this._trace = new Operation();
    this._servers = [];
    this._parameters = [];
  }

  public getRef = (): string => this._ref;
  public getSummary = (): string => this._summary;
  public getDescription = (): string => this._description;
  public getGet = (): Operation => this._get;
  public getPut = (): Operation => this._put;
  public getPost = (): Operation => this._post;
  public getDelete = (): Operation => this._delete;
  public getOptions = (): Operation => this._options;
  public getHead = (): Operation => this._head;
  public getPatch = (): Operation => this._patch;
  public getTrace = (): Operation => this._trace;
  public getServers = (): Server[] => this._servers;
  public getParameters = (): Parameter[] | Reference[] => this._parameters;

  public setRef = (ref: string) => (this._ref = ref);
  public setSummary = (summary: string) => (this._summary = summary);
  public setDescription = (description: string) => (this._description = description);
  public setGet = (op: Operation) => (this._get = op);
  public setPut = (op: Operation) => (this._put = op);
  public setPost = (op: Operation) => (this._post = op);
  public setDelete = (op: Operation) => (this._delete = op);
  public setOptions = (op: Operation) => (this._options = op);
  public setHead = (op: Operation) => (this._head = op);
  public setPatch = (op: Operation) => (this._patch = op);
  public setTrace = (op: Operation) => (this._trace = op);
  public setServers = (servers: Server[]) => (this._servers = servers);
  public setParameters = (parameters: Parameter[] | Reference[]) => (this._parameters = parameters);
}
