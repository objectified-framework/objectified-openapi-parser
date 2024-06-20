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

  public getExpression = (): string => this._expression;
  public getValue = (): PathItem | Reference => this._value;

  public setExpression = (expression: string) => (this._expression = expression);
  public setValue = (value: PathItem | Reference) => (this._value = value);
}
