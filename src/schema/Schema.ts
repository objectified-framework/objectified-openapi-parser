import { Discriminator, DiscriminatorMap, Example, ExternalDocumentation, XML } from '.';

export type SchemaMap = {
  [key in string]: Schema;
};

// Covers 4.8.24.1
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

    const newSchema = new Map(segment);

    newSchema['discriminator'] = null;
    newSchema['xml'] = null;
    newSchema['externalDocs'] = null;
    newSchema['example'] = null;

    obj.setSchema(newSchema);

    return obj;
  }

  public getSchema = (): any => this._schema;
  public getDiscriminator = (): Discriminator => this._discriminator;
  public getXml = (): XML => this._xml;
  public getExternalDocs = (): ExternalDocumentation => this._externalDocs;
  public getExample = (): any => this._example;

  public setSchema = (schema: any) => (this._schema = schema);
  public setDiscriminator = (discriminator: Discriminator) => (this._discriminator = discriminator);
  public setXml = (xml: XML) => (this._xml = xml);
  public setExternalDocs = (externalDocs: ExternalDocumentation) => (this._externalDocs = externalDocs);
  public setExample = (example: any) => (this._example = example);

  toString() {
    return `[Schema] _schema=${JSON.stringify(this._schema)} _discriminator=${this._discriminator} _xml=${this._xml} _externalDocs=${this._externalDocs} _example=${this._example}`;
  }
}
