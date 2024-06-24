import { ExternalDocumentation } from '.';
import { ParsingError } from '..';

// Covers 4.8.22.1
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

  public getName = (): string => this._name;
  public getDescription = (): string => this._description;
  public getExternalDocs = (): ExternalDocumentation => this._externalDocs;

  public setName = (name: string) => (this._name = name);
  public setDescription = (description: string) => (this._description = description);
  public setExternalDocs = (externalDocs: ExternalDocumentation) => (this._externalDocs = externalDocs);

  toString() {
    return `[Tag] _name=${this._name} _description=${this._description} _externalDocs=${this._externalDocs}`;
  }
}
