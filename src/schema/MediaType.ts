import { EncodingMap, ExampleOrReferenceMap, Schema } from '.';

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

  public parse(segment: any): MediaType {
    const obj = new MediaType();

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
}
