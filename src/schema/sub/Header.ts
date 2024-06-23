import { Schema } from '../Schema';
import { MediaType, MediaTypeMap } from '../MediaType';
import { ExampleOrReferenceMap } from './Parameter';
import { Reference } from './Reference';
import { Example } from './Example';

export type HeaderOrReferenceMap = {
  [key in string]: Header | Reference;
};

// Covers 4.8.21.1
export class Header {
  private _description: string;
  private _required: boolean;
  private _deprecated: boolean;
  private _allowEmptyValue: boolean;
  private _style: string;
  private _explode: boolean;
  private _allowReserved: boolean;
  private _schema: Schema;
  private _example: any;
  private _examples: ExampleOrReferenceMap;
  private _content: MediaTypeMap;

  constructor() {
    this._schema = new Schema();
    this._examples = {};
    this._content = {};
  }

  public static parse(segment: any): Header {
    const obj = new Header();

    obj.setDescription(segment['description'] ?? null);
    obj.setRequired(segment['required'] ?? false);
    obj.setDeprecated(segment['deprecated'] ?? false);
    obj.setStyle(segment['style'] ?? null);
    obj.setExplode(segment['explode'] ?? false);
    obj.setAllowReserved(segment['allowReserved'] ?? false);

    if (segment['schema']) {
      obj.setSchema(Schema.parse(segment['schema']));
    }

    obj.setExample(segment['example'] ?? null);

    if (segment['examples']) {
      for (const key of Object.keys(segment['examples'])) {
        const value = segment['examples'][key];

        if (Reference.isReference(value)) {
          obj.getExamples()[key] = Reference.parse(value);
        } else {
          obj.getExamples()[key] = Example.parse(value);
        }
      }
    }

    if (segment['content']) {
      for (const key of Object.keys(segment['content'])) {
        const value = segment['content'][key];

        obj.getContent()[key] = MediaType.parse(value);
      }
    }

    return obj;
  }

  public getDescription = (): string => this._description;
  public isRequired = (): boolean => this._required;
  public isDeprecated = (): boolean => this._deprecated;
  public isAllowEmptyValue = (): boolean => this._allowEmptyValue;
  public getStyle = (): string => this._style;
  public isExplode = (): boolean => this._explode;
  public isAllowReserved = (): boolean => this._allowReserved;
  public getSchema = (): Schema => this._schema;
  public getExample = (): any => this._example;
  public getExamples = (): ExampleOrReferenceMap => this._examples;
  public getContent = (): MediaTypeMap => this._content;

  public setDescription = (description: string) => (this._description = description);
  public setRequired = (required: boolean) => (this._required = required);
  public setDeprecated = (deprecated: boolean) => (this._deprecated = deprecated);
  public setAllowEmptyValue = (allowEmptyValue: boolean) => (this._allowEmptyValue = allowEmptyValue);
  public setStyle = (style: string) => (this._style = style);
  public setExplode = (explode: boolean) => (this._explode = explode);
  public setAllowReserved = (allowReserved: boolean) => (this._allowReserved = allowReserved);
  public setSchema = (schema: Schema) => (this._schema = schema);
  public setExample = (example: any) => (this._example = example);
  public setExamples = (examples: ExampleOrReferenceMap) => (this._examples = examples);
  public setContent = (content: MediaTypeMap) => (this._content = content);

  toString() {
    return (
      `[Header] _description=${this._description} _required=${this._required} ` +
      `_deprecated=${this._deprecated} _allowEmptyValue=${this._allowEmptyValue} _style=${this._style} _explode=${this._explode} ` +
      `_allowReserved=${this._allowReserved} _schema=${this._schema} _example=${this._example} _examples=${this._examples} ` +
      `_content=${this._content}`
    );
  }
}
