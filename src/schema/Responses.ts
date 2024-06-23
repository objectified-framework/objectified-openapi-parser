import { Reference, Response } from '.';

export type ResponsesOrReferenceMap = {
  [key in string]: Response | Reference;
};

// Covers 4.8.16.1
export class Responses {
  private _default: Response | Reference;
  private _responses: ResponsesOrReferenceMap;

  constructor() {
    this._default = null;
    this._responses = {};
  }

  public static parse(segment: any): Responses {
    const obj = new Responses();

    if (segment['default']) {
      if (Reference.isReference(segment['default'])) {
        obj.setDefault(Reference.parse(segment['default']));
      } else {
        obj.setDefault(Response.parse(segment['default']));
      }
    }

    for (const key of Object.keys(segment)) {
      if (key !== 'default') {
        const value = segment[key];

        if (Reference.isReference(value)) {
          obj.getResponses()[key] = Reference.parse(value);
        } else {
          obj.getResponses()[key] = Response.parse(value);
        }
      }
    }

    return obj;
  }

  public getDefault = (): Response | Reference => this._default;
  public getResponses = (): ResponsesOrReferenceMap => this._responses;

  public setDefault = (_default: Response | Reference) => (this._default = _default);
  public setResponses = (responses: ResponsesOrReferenceMap) => (this._responses = responses);

  toString() {
    return `[Responses] _default=${this._default} _responses=${this._responses}`;
  }
}
