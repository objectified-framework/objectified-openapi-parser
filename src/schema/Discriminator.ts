// Covers 4.8.25.1 Hashmap
import { ParsingError } from '.';

export type DiscriminatorMap = {
  [key in string]: string;
};

// Covers 4.8.25.1
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

  public getPropertyName = (): string => this._propertyName;
  public getMapping = (): DiscriminatorMap => this._mapping;

  public setPropertyName = (propertyName: string) => (this._propertyName = propertyName);
  public setMapping = (mapping: DiscriminatorMap) => (this._mapping = mapping);

  toString() {
    return `[Discriminator] _propertyName=${this._propertyName} _mapping=${this._mapping}`;
  }
}
