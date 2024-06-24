import { MediaType, MediaTypeMap, Schema, ParsingError } from '..';
import { Example, Reference } from '.';

// Covers 4.8.12.2
export type ExampleOrReferenceMap = {
  [key in string]: Example | Reference;
};

export type ParameterOrReferenceMap = {
  [key in string]: Parameter | Reference;
};

/**
 * Header is a section of the OpenAPI that describes a single operation parameter.  A unique parameter is defined by a
 * combination of a `name` and a `location`.
 *
 * {@link https://spec.openapis.org/oas/latest.html#parameter-object}
 */
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

  /**
   * Parses a segment of an OpenAPI document containing an `Parameter`.
   *
   * @param segment `Parameter` OpenAPI segment.
   * @returns `Parameter` object populated with the provided segment.
   */
  public static parse(segment: any): Parameter {
    const obj = new Parameter();

    if (!segment['name']) {
      throw new ParsingError('Parameter segment is missing required "name"');
    }

    if (!segment['in']) {
      throw new ParsingError('Parameter segment is missing required "in"');
    }

    obj.setName(segment['name']);
    obj.setIn(segment['in']);
    obj.setDescription(segment['description'] ?? null);
    obj.setRequired(segment['required'] ?? false);
    obj.setDeprecated(segment['deprecated'] ?? false);
    obj.setAllowEmptyValue(segment['_allowEmptyValue'] ?? false);
    obj.setStyle(segment['style'] ?? null);
    obj.setExplode(segment['explode'] ?? false);
    obj.setAllowReserved(segment['allowReserved'] ?? false);

    if (segment['schema']) {
      obj.setSchema(Schema.parse(segment['schema']));
    }

    obj.setExample(segment['example']);

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

  /** Retrives the name of the parameter. */
  public getName = (): string => this._name;

  /** Retrieves the location of the parameter. */
  public getIn = (): string => this._in;

  /** Retrieves the description. */
  public getDescription = (): string => this._description;

  /** Flag indicating if the parameter is required. */
  public isRequired = (): boolean => this._required;

  /** Flag indicating if the parameter is deprecated. */
  public isDeprecated = (): boolean => this._deprecated;

  /** Flag indicating if the parameter allows empty-valued parameters. */
  public isAllowEmptyValue = (): boolean => this._allowEmptyValue;

  /** Retrieves the style of the serialization for the parameter value. */
  public getStyle = (): string => this._style;

  /** Flag indicating if the array or object values generate separate parameters. */
  public isExplode = (): boolean => this._explode;

  /** Flag indicating if the parameter value _SHOULD_ allow reserved characters as defined by RFC3986 */
  public isAllowReserved = (): boolean => this._allowReserved;

  /** Retrieves the schema defining the type used for the parameter. */
  public getSchema = (): Schema => this._schema;

  /** Retrieves the example of the parameter's potential value. */
  public getExample = (): any => this._example;

  /** Retrieves an example of the parameter's potential values specified a parameter at a time. */
  public getExamples = (): ExampleOrReferenceMap => this._examples;

  /** Retrieves a map containing the representations for the parameter. */
  public getContent = (): MediaTypeMap => this._content;

  /** Sets the name of the parameter. */
  public setName = (name: string) => (this._name = name);

  /** Sets the location of the parameter, values can be `query`, `header`, `path`, and `cookie`. */
  public setIn = (_in: string) => (this._in = _in);

  /** Sets the description of the parameter. */
  public setDescription = (description: string) => (this._description = description);

  /** Sets the flag indicating if this parameter is required to be set to a value. */
  public setRequired = (required: boolean) => (this._required = required);

  /** Sets the flag indicating if this parameter is deprecated. */
  public setDeprecated = (deprecated: boolean) => (this._deprecated = deprecated);

  /** Sets the flag indicating if this parameter allows an empty value. */
  public setAllowEmptyValue = (allowEmptyValue: boolean) => (this._allowEmptyValue = allowEmptyValue);

  /** Sets the style of serialization for he parameter value, values can be `query-form`, `path-simple`, `header-simple` or `cookie-form`. */
  public setStyle = (style: string) => (this._style = style);

  /** Sets the flag indicating if this parameter explodes values to other parameters. */
  public setExplode = (explode: boolean) => (this._explode = explode);

  /** Sets the flag indicating if this parameter _SHOULD_ allow reserved characters as defined by RFC3986 */
  public setAllowReserved = (allowReserved: boolean) => (this._allowReserved = allowReserved);

  /** Sets the schema for this parameter. */
  public setSchema = (schema: Schema) => (this._schema = schema);

  /** Sets the example of the parameter's potential value. */
  public setExample = (example: any) => (this._example = example);

  /** Sets the example of the parameter's potential values specified a parameter at a time. */
  public setExamples = (examples: ExampleOrReferenceMap) => (this._examples = examples);

  /** Sets a map of representations for the parameter. */
  public setContent = (content: MediaTypeMap) => (this._content = content);

  toString() {
    return (
      `[Parameter] _name=${this._name} _in=${this._in} _description=${this._description} _required=${this._required} ` +
      `_deprecated=${this._deprecated} _allowEmptyValue=${this._allowEmptyValue} _style=${this._style} _explode=${this._explode} ` +
      `_allowReserved=${this._allowReserved} _schema=${this._schema} _example=${this._example} _examples=${this._examples} ` +
      `_content=${this._content}`
    );
  }
}
