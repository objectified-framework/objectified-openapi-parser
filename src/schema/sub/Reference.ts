import { ParsingError } from '..';

/**
 * Reference is a section of the OpenAPI that allows referencing other components in the OpenAPI document,
 * interally and externally.
 *
 * {@link https://spec.openapis.org/oas/latest.html#reference-object}
 */
export class Reference {
  public _ref: string; // Required
  public _summary: string;
  public _description: string;

  constructor() {}

  /**
   * Parses a segment of an OpenAPI document containing an `Reference`.
   *
   * @param segment `Reference` OpenAPI segment.
   * @returns `Reference` object populated with the provided segment.
   */
  public static parse(segment: any): Reference {
    const obj = new Reference();

    if (!Reference.isReference(segment)) {
      throw new ParsingError('Reference segment is missing required "$ref"');
    }

    obj.setRef(segment['$ref']);
    obj.setSummary(segment['summary'] ?? null);
    obj.setDescription(segment['description'] ?? null);

    return obj;
  }

  /** Indicates whether or not a given segment payload contains a reference. */
  public static isReference = (segment: any): boolean => segment['$ref'] != null;

  /** Retrieves the reference. */
  public getRef = (): string => this._ref;

  /** Retrieves the summary. */
  public getSummary = (): string => this._summary;

  /** Retrieves the description. */
  public getDescription = (): string => this._description;

  /** Sets the reference, _*REQUIRED*_.  This _MUST_ be in the form of a URI. */
  public setRef = (ref: string) => (this._ref = ref);

  /** Sets the short summary which by default _SHOULD_ override that of the referenced component. */
  public setSummary = (summary: string) => (this._summary = summary);

  /** Sets the description which by default _SHOULD_ override that of the referenced component. */
  public setDescription = (description: string) => (this._description = description);

  toString() {
    return `[Reference]: _ref=${this._ref} _summary=${this._summary} _description=${this._description}`;
  }
}
