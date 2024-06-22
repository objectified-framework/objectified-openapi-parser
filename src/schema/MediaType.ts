import { Encoding, EncodingMap, Example, ExampleOrReferenceMap, Reference, Schema } from '.';

// Covers 4.8.14.1
export type MediaTypeMap = {
  [key in string]: MediaType;
};

// Covers 4.8.14.1
export class MediaType {
  private _schema: Schema;
  private _example: any;
  private _examples: ExampleOrReferenceMap;
  private _encoding: EncodingMap;

  constructor() {
    this._schema = new Schema();
    this._examples = {};
    this._encoding = {};
  }

  public static parse(segment: any): MediaType {
    const obj = new MediaType();

    if (segment['schema']) {
      obj.setSchema(Schema.parse(segment['schema']));
    }

    obj.setExample(segment['example'] ?? null);

    if (segment['examples']) {
      segment['examples'].forEach((value, key) => {
        if (value.contains('$ref')) {
          obj.getExamples()[key] = Reference.parse(value);
        } else {
          obj.getExamples()[key] = Example.parse(value);
        }
      });
    }

    if (segment['encoding']) {
      segment['encoding'].forEach((value, key) => (obj.getEncoding()[key] = Encoding.parse(value)));
    }

    return obj;
  }

  public getSchema = (): Schema => this._schema;
  public getExample = (): any => this._example;
  public getExamples = (): ExampleOrReferenceMap => this._examples;
  public getEncoding = (): EncodingMap => this._encoding;

  public setSchema = (schema: Schema) => (this._schema = schema);
  public setExample = (example: any) => (this._example = example);
  public setExamples = (examples: ExampleOrReferenceMap) => (this._examples = examples);
  public setEncoding = (encoding: EncodingMap) => (this._encoding = encoding);

  toString() {
    return `[MediaType] _schema=${this._schema} _example=${this._example} _examples=${this._examples} _encoding=${this._encoding}`;
  }
}
