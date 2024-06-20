import { MediaTypeMap } from '.';

// Covers 4.8.13.1
export class RequestBody {
  private _description: string;
  private _content: MediaTypeMap; // Required
  private _required: boolean;

  constructor() {
    this._content = {};
  }

  public getDescription = (): string => this._description;
  public getContent = (): MediaTypeMap => this._content;
  public isRequired = (): boolean => this._required;

  public setDescription = (description: string) => (this._description = description);
  public setContent = (content: MediaTypeMap) => (this._content = content);
  public setRequired = (required: boolean) => (this._required = required);
}
