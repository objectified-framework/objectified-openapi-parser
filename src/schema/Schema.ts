import { Discriminator, DiscriminatorMap, ExternalDocumentation, XML } from '.';

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
}
