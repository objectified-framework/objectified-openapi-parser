// Covers 4.8.23.1
import { ParsingError } from '../../ParsingError';

export class Reference {
  public _ref: string; // Required
  public _summary: string;
  public _description: string;

  constructor() {}

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

  public static isReference = (segment: any): boolean => segment['$ref'] != null;

  public getRef = (): string => this._ref;
  public getSummary = (): string => this._summary;
  public getDescription = (): string => this._description;

  public setRef = (ref: string) => (this._ref = ref);
  public setSummary = (summary: string) => (this._summary = summary);
  public setDescription = (description: string) => (this._description = description);

  toString() {
    return `[Reference]: _ref=${this._ref} _summary=${this._summary} _description=${this._description}`;
  }
}
