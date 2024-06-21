import { Example, MediaTypeMap, Reference, Schema } from '.';

// Covers 4.8.12.2
export type ExampleOrReferenceMap = {
  [key in string]: Example | Reference;
};

export type ParameterOrReferenceMap = {
  [key in string]: Parameter | Reference;
};

// Covers 4.8.12.2
export class Parameter {
  private _name: string; // Required
  private _in: string; // Required
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

  public parse(segment: any): Parameter {
    const obj = new Parameter();

    return obj;
  }

  public getName = (): string => this._name;
  public getIn = (): string => this._in;
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

  public setName = (name: string) => (this._name = name);
  public setIn = (_in: string) => (this._in = _in);
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
}
