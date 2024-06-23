// Covers 4.8.11.1
import { ParsingError } from '..';

export class ExternalDocumentation {
  private _description: string;
  private _url: string; // Required

  constructor() {}

  public static parse(segment: any): ExternalDocumentation {
    const obj = new ExternalDocumentation();

    if (!segment['url']) {
      throw new ParsingError('ExternalDocs segment is missing required "url"');
    }

    obj.setDescription(segment['description'] ?? null);
    obj.setUrl(segment['url']);

    return obj;
  }

  public getDescription = (): string => this._description;
  public getUrl = (): string => this._url;

  public setDescription = (description: string) => (this._description = description);
  public setUrl = (url: string) => (this._url = url);

  toString() {
    return `[ExternalDocumentation] _description=${this._description} url=${this._url}`;
  }
}
