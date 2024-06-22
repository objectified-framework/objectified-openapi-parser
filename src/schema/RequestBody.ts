import { MediaType, MediaTypeMap, Reference } from '.';
import { ParsingError } from '../ParsingError';

export type RequestBodyOrReferenceMap = {
  [key in string]: RequestBody | Reference;
};

// Covers 4.8.13.1
export class RequestBody {
  private _description: string;
  private _content: MediaTypeMap; // Required
  private _required: boolean;

  constructor() {
    this._content = {};
  }

  public parse(segment: any): RequestBody {
    const obj = new RequestBody();

    if (!segment['content']) {
      throw new ParsingError('RequestBody segment is missing required "content"');
    }

    obj.setDescription(segment['description'] ?? null);
    obj.setRequired(segment['required'] ?? false);

    segment['content'].forEach((value, key) => (obj.getContent()[key] = MediaType.parse(value)));

    return obj;
  }

  public getDescription = (): string => this._description;
  public getContent = (): MediaTypeMap => this._content;
  public isRequired = (): boolean => this._required;

  public setDescription = (description: string) => (this._description = description);
  public setContent = (content: MediaTypeMap) => (this._content = content);
  public setRequired = (required: boolean) => (this._required = required);

  toString() {
    return `[RequestBody] _description=${this._description} _content=${this._content} _required=${this._required}`;
  }
}
