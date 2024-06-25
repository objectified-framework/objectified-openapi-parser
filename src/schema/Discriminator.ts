// Covers 4.8.25.1 Hashmap
import { ParsingError } from '.';

export type DiscriminatorMap = {
  [key in string]: string;
};

/**
 * Discriminator is a section of the OpenAPI that is used when request bodies or response payloads may be one of a
 * number of different schemas.  This object aids in serialization, deserialization, and validation.  The discriminator
 * is a specific object in a schema which is used to inform the consumer of the document of an alternative schema
 * based on the value associated with it.
 *
 * When using the discriminator, _inline_ schemas will not be considered.
 *
 * {@link https://spec.openapis.org/oas/latest.html#discriminator-object}
 */
export class Discriminator {
  private _propertyName: string; // Required
  private _mapping: DiscriminatorMap;

  constructor() {
    this._mapping = {};
  }

  /**
   * Parses a segment of an OpenAPI document containing an `Discriminator`.
   *
   * @param segment `Discriminator` OpenAPI segment.
   * @returns `Discriminator` object populated with the provided segment.
   */
  public static parse(segment: any): Discriminator {
    const obj = new Discriminator();

    if (!segment['propertyName']) {
      throw new ParsingError('Discriminator segment is missing required "propertyName"');
    }

    obj.setPropertyName(segment['propertyName']);

    if (segment['mapping']) {
      for (const key of Object.keys(segment['mapping'])) {
        const value = segment['mapping'][key];

        obj.getMapping()[key] = value;
      }
    }

    return obj;
  }

  /** Retrieves the name of the property. */
  public getPropertyName = (): string => this._propertyName;

  /** Retrieves the the mapping of payloads and schema names or references. */
  public getMapping = (): DiscriminatorMap => this._mapping;

  /** _*REQUIRED*_.  Sets the name of the property in the payload that will hold the discriminator value. */
  public setPropertyName = (propertyName: string) => (this._propertyName = propertyName);

  /** Sets the object to hold mappings between payload values and schema names or references. */
  public setMapping = (mapping: DiscriminatorMap) => (this._mapping = mapping);

  toString() {
    return `[Discriminator] _propertyName=${this._propertyName} _mapping=${this._mapping}`;
  }
}
