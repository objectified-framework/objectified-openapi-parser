import { PathItem, Reference } from '.';

export type CallbackOrReferenceMap = {
  [key in string]: Callback | Reference;
};

// Covers 4.8.18.1
export class Callback {
  private _expression: string;
  private _value: PathItem | Reference;

  constructor() {
    this._value = null;
  }

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

  public getExpression = (): string => this._expression;
  public getValue = (): PathItem | Reference => this._value;

  public setExpression = (expression: string) => (this._expression = expression);
  public setValue = (value: PathItem | Reference) => (this._value = value);

  toString() {
    return `[Callback] _expression=${this._expression} _value=${this._value}`;
  }
}
