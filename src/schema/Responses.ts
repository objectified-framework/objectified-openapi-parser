import { Reference, Response } from './sub';

export type ResponsesOrReferenceMap = {
  [key in string]: Response | Reference;
};

/**
 * Responses is a section of the OpenAPI that stores the expected responses of an operation.  The container maps an
 * HTTP response code to the expected response.
 *
 * The documentation is not necessarily expected to cover all possible HTTP response codes because they may not be known
 * in advance.  However, documentation is expected to cover a successful operation response and any known errors.
 *
 * The `default` _MAY_ be used as a default response object for all HTTP codes that are not covered individually by
 * the `Responses` object.
 *
 * The `Responses` object _MUST_ contain at least one response code, and if only one response code is provided, it
 * _SHOULD_ be the response for a successful operation call.
 *
 * {@link https://spec.openapis.org/oas/latest.html#responses-object}
 */
export class Responses {
  private _default: Response | Reference;
  private _responses: ResponsesOrReferenceMap;

  constructor() {
    this._default = null;
    this._responses = {};
  }

  /**
   * Parses a segment of an OpenAPI document containing an `Responses`.
   *
   * @param segment `Responses` OpenAPI segment.
   * @returns `Responses` object populated with the provided segment.
   */
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

  /** Retrieves the default response or reference. */
  public getDefault = (): Response | Reference => this._default;

  /** Retrieves a list of all possible responses. */
  public getResponses = (): ResponsesOrReferenceMap => this._responses;

  /** Sets the default response or reference to a response schema object. */
  public setDefault = (_default: Response | Reference) => (this._default = _default);

  /** Sets a mapping of the possible response codes and their responses or references. */
  public setResponses = (responses: ResponsesOrReferenceMap) => (this._responses = responses);

  toString() {
    return `[Responses] _default=${this._default} _responses=${this._responses}`;
  }
}
