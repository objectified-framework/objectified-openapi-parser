import { ExternalDocumentation } from '.';
import { ParsingError } from '..';

/**
 * Tag is a section of the OpenAPI that adds metadata to a single tag that is used by the `Operation` object.
 * It is not mandatory to have a `Tag` object per tag defined in the `Operation` object instances.
 *
 * {@link https://spec.openapis.org/oas/latest.html#tag-object}
 */
export class Tag {
  private _name: string; // Required
  private _description: string;
  private _externalDocs: ExternalDocumentation;

  constructor() {
    this._externalDocs = new ExternalDocumentation();
  }

  /**
   * Parses a segment of an OpenAPI document containing an `Tag`.
   *
   * @param segment `Tag` OpenAPI segment.
   * @returns `Tag` object populated with the provided segment.
   */
  public static parse(segment: any): Tag {
    const obj = new Tag();

    if (!segment['name']) {
      throw new ParsingError('Tag segment is missing required "name"');
    }

    obj.setName(segment['name']);
    obj.setDescription(segment['description'] ?? null);

    if (segment['externalDocs']) {
      obj.setExternalDocs(ExternalDocumentation.parse(segment['externalDocs']));
    }

    return obj;
  }

  /** Retrieves the name of the tag. */
  public getName = (): string => this._name;

  /** Retrives the description. */
  public getDescription = (): string => this._description;

  /** Retrieves additional external documentation. */
  public getExternalDocs = (): ExternalDocumentation => this._externalDocs;

  /** _*REQUIRED*_.  Sets the name of the tag. */
  public setName = (name: string) => (this._name = name);

  /** Sets the description of the tag. */
  public setDescription = (description: string) => (this._description = description);

  /** Sets additional external documentation for this tag. */
  public setExternalDocs = (externalDocs: ExternalDocumentation) => (this._externalDocs = externalDocs);

  toString() {
    return `[Tag] _name=${this._name} _description=${this._description} _externalDocs=${this._externalDocs}`;
  }
}
