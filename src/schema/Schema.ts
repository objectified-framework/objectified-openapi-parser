import { Discriminator } from '.';
import { Example, ExternalDocumentation, XML } from './sub';

export type SchemaMap = {
  [key in string]: Schema;
};

/**
 * Schema is a section of the OpenAPI that defines the input and output data types.  These types can be objects, but
 * also primitives and arrays.  The object is a superset of the JSON Schema Specification Draft 2020-12.
 *
 * For more information about the properties, see JSON Schema Core and JSON Schema Validation.
 *
 * Unless stated otherwise, the property definitions follow those of JSON Schema and do not add any additional
 * semantics.  Where JSON Schema indicates that behavior is defined by the application (e.g. for annotations), OpenAPI
 * Specifications also defers the definition of semantics to the application consuming the OpenAPI document.
 *
 * {@link https://spec.openapis.org/oas/latest.html#schema-object}
 */
export class Schema {
  private _schema: any; // Required, this is a JSON Schema
  private _discriminator: Discriminator;
  private _xml: XML;
  private _externalDocs: ExternalDocumentation;
  private _example: any;

  constructor() {
    this._discriminator = new Discriminator();
    this._xml = new XML();
    this._externalDocs = new ExternalDocumentation();
  }

  /**
   * Parses a segment of an OpenAPI document containing an `Schema`.
   *
   * @param segment `Schema` OpenAPI segment.
   * @returns `Schema` object populated with the provided segment.
   */
  public static parse(segment: any): Schema {
    const obj = new Schema();

    if (segment['discriminator']) {
      obj.setDiscriminator(Discriminator.parse(segment['discriminator']));
    }

    if (segment['xml']) {
      obj.setXml(XML.parse(segment['xml']));
    }

    if (segment['externalDocs']) {
      obj.setExternalDocs(ExternalDocumentation.parse(segment['externalDocs']));
    }

    if (segment['example']) {
      obj.setExample(Example.parse(segment['example']));
    }

    segment['discriminator'] = null;
    segment['xml'] = null;
    segment['externalDocs'] = null;
    segment['example'] = null;

    obj.setSchema(segment);

    return obj;
  }

  /** Retrieves the JSON schema definition. */
  public getSchema = (): any => this._schema;

  /** Retrieves the discriminator. */
  public getDiscriminator = (): Discriminator => this._discriminator;

  /** Retrieves the XML definition. */
  public getXml = (): XML => this._xml;

  /** Retrieves external documentation. */
  public getExternalDocs = (): ExternalDocumentation => this._externalDocs;

  /** Retrieves the example provided. */
  public getExample = (): any => this._example;

  /** Sets the schema defined, removing the `discriminator`, `xml`, `externalDocs`, and `example` keys. */
  public setSchema = (schema: any) => (this._schema = schema);

  /** Sets the support for polymorphism. */
  public setDiscriminator = (discriminator: Discriminator) => (this._discriminator = discriminator);

  /** Sets the XML definition that _MAY_ be used only on properties schemas. */
  public setXml = (xml: XML) => (this._xml = xml);

  /** Sets additional external documentation for this schema. */
  public setExternalDocs = (externalDocs: ExternalDocumentation) => (this._externalDocs = externalDocs);

  /** Sets a free-form example of an instance for this schema. */
  public setExample = (example: any) => (this._example = example);

  toString() {
    return `[Schema] _schema=${JSON.stringify(this._schema)} _discriminator=${this._discriminator} _xml=${this._xml} _externalDocs=${this._externalDocs} _example=${this._example}`;
  }
}
