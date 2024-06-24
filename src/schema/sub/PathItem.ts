import { Operation, Server } from '..';
import { Parameter, Reference } from '.';

export type PathItemOrReferenceMap = {
  [key in string]: PathItem | Reference;
};

/**
 * PathItem is a section of the OpenAPI that describes the operations available on a single path.  A `PathItem`
 * _MAY_ be empty, due to ACL constraints.  The path itself is still exposed to the documentation viewer but they
 * will not know which operations and parameters are available.
 *
 * {@link https://spec.openapis.org/oas/latest.html#path-item-object}
 */
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

  /**
   * Parses a segment of an OpenAPI document containing an `PathItem`.
   *
   * @param segment `PathItem` OpenAPI segment.
   * @returns `PathItem` object populated with the provided segment.
   */
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

  /** Retrieves the ref definition. */
  public getRef = (): string => this._ref;

  /** Retrieves the summary. */
  public getSummary = (): string => this._summary;

  /** Retrieves the description. */
  public getDescription = (): string => this._description;

  /** Retrieves the `get` operation. */
  public getGet = (): Operation => this._get;

  /** Retrieves the `put` operation. */
  public getPut = (): Operation => this._put;

  /** Retrieves the `post` operation. */
  public getPost = (): Operation => this._post;

  /** Retrieves the `delete` operation. */
  public getDelete = (): Operation => this._delete;

  /** Retrieves the `options` operation. */
  public getOptions = (): Operation => this._options;

  /** Retrieves the `head` operation. */
  public getHead = (): Operation => this._head;

  /** Retrieves the `patch` operation. */
  public getPatch = (): Operation => this._patch;

  /** Retrieves the `trace` operation. */
  public getTrace = (): Operation => this._trace;

  /** Retrieves an alternative server array to service all operations in this path. */
  public getServers = (): Server[] => this._servers;

  /** Retrieves the list of parameters that are applicable for all operations described under this path. */
  public getParameters = (): Parameter[] & Reference[] => this._parameters;

  /** Sets the ref definition of this path item. */
  public setRef = (ref: string) => (this._ref = ref);

  /** Sets the summary. */
  public setSummary = (summary: string) => (this._summary = summary);

  /** Sets the description. */
  public setDescription = (description: string) => (this._description = description);

  /** Sets the `get` operation. */
  public setGet = (op: Operation) => (this._get = op);

  /** Sets the `put` operation. */
  public setPut = (op: Operation) => (this._put = op);

  /** Sets the `post` operation. */
  public setPost = (op: Operation) => (this._post = op);

  /** Sets the `delete` operation. */
  public setDelete = (op: Operation) => (this._delete = op);

  /** Sets the `options` operation. */
  public setOptions = (op: Operation) => (this._options = op);

  /** Sets the `head` operation. */
  public setHead = (op: Operation) => (this._head = op);

  /** Sets the `patch` operation. */
  public setPatch = (op: Operation) => (this._patch = op);

  /** Sets the `trace` operation. */
  public setTrace = (op: Operation) => (this._trace = op);

  /** Sets the list of alternative `server` services for all operations in this path. */
  public setServers = (servers: Server[]) => (this._servers = servers);

  /** Sets the list of parameters that are applicable for all operations described under this path. */
  public setParameters = (parameters: Parameter[] & Reference[]) => (this._parameters = parameters);

  toString() {
    return (
      `[PathItem] _ref=${this._ref} _summary=${this._summary} _description=${this._description} _get=${this._get} ` +
      `_put=${this._put} _post=${this._post} _delete=${this._delete} _options=${this._options} _head=${this._head} ` +
      `_patch=${this._patch} _trace=${this._trace} _servers=${this._servers} _parameters=${this._parameters}`
    );
  }
}
