import { PathItem, Reference } from './sub';

export type CallbackOrReferenceMap = {
  [key in string]: Callback | Reference;
};

/**
 * Callback is a section of the OpenAPI that maps a possible out-of-bound callback related to the parent operation.
 * Each value in the map is a ` Path Item` object that describes a set of requests that may be initiated by the API
 * provider and the expected responses.  THe key value used to identify the path item object is an expression,
 * evaluated at runtime, that identifies a URL to use for the callback operation.
 *
 * To describe incoming requests from the API provider independent from another API call, use the `webhooks` field.
 *
 * {@link https://spec.openapis.org/oas/latest.html#callback-object}
 */

export class Callback {
  private _expression: string;
  private _value: PathItem | Reference;

  constructor() {
    this._value = null;
  }

  /**
   * Parses a segment of an OpenAPI document containing an `Callback`.
   *
   * @param segment `Callback` OpenAPI segment.
   * @returns `Callback` object populated with the provided segment.
   */
  public static parse(segment: any): Callback {
    const obj = new Callback();
    const key = Object.keys(segment)[0];
    const value = segment[key];

    obj.setExpression(key);

    if (Reference.isReference(value)) {
      obj.setValue(Reference.parse(value));
    } else {
      obj.setValue(PathItem.parse(value));
    }

    return obj;
  }

  /** Retrieves the associated expression. */
  public getExpression = (): string => this._expression;

  /** Retrieves the `PathItem` or `Reference` associated with the expression. */
  public getValue = (): PathItem | Reference => this._value;

  /** Sets the expression. */
  public setExpression = (expression: string) => (this._expression = expression);

  /** Assigns a `PathItem` object or a `Reference` to one, used to define a callback request and expected responses. */
  public setValue = (value: PathItem | Reference) => (this._value = value);

  toString() {
    return `[Callback] _expression=${this._expression} _value=${this._value}`;
  }
}
