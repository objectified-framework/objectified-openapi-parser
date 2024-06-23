import { Operation, Parameter, Reference, Server } from '../index';

export type PathItemOrReferenceMap = {
  [key in string]: PathItem | Reference;
};

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
  private _parameters: Parameter[] & Reference[];

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

  public static parse(segment: any): PathItem {
    const obj = new PathItem();

    obj.setRef(segment['$ref'] ?? null);
    obj.setSummary(segment['summary'] ?? null);
    obj.setDescription(segment['description'] ?? null);
    obj.setGet(segment['get'] ? Operation.parse(segment['get']) : null);
    obj.setPut(segment['put'] ? Operation.parse(segment['put']) : null);
    obj.setPost(segment['post'] ? Operation.parse(segment['post']) : null);
    obj.setDelete(segment['delete'] ? Operation.parse(segment['delete']) : null);
    obj.setOptions(segment['options'] ? Operation.parse(segment['options']) : null);
    obj.setHead(segment['head'] ? Operation.parse(segment['head']) : null);
    obj.setPatch(segment['patch'] ? Operation.parse(segment['patch']) : null);
    obj.setTrace(segment['trace'] ? Operation.parse(segment['trace']) : null);

    if (segment['servers']) {
      for (const value of segment['servers']) {
        obj.getServers().push(Server.parse(value));
      }
    }

    if (segment['parameters']) {
      for (const value of segment['parameters']) {
        if (Reference.isReference(value)) {
          obj.getParameters().push(Reference.parse(value));
        } else {
          obj.getParameters().push(Parameter.parse(value));
        }
      }
    }

    return obj;
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
  public getParameters = (): Parameter[] & Reference[] => this._parameters;

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
  public setParameters = (parameters: Parameter[] & Reference[]) => (this._parameters = parameters);

  toString() {
    return (
      `[PathItem] _ref=${this._ref} _summary=${this._summary} _description=${this._description} _get=${this._get} ` +
      `_put=${this._put} _post=${this._post} _delete=${this._delete} _options=${this._options} _head=${this._head} ` +
      `_patch=${this._patch} _trace=${this._trace} _servers=${this._servers} _parameters=${this._parameters}`
    );
  }
}
