// Covers 4.8.25.1 Hashmap
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

  public parse(segment: any): Discriminator {
    const obj = new Discriminator();

    return obj;
  }

  public getPropertyName = (): string => this._propertyName;
  public getMapping = (): DiscriminatorMap => this._mapping;

  public setPropertyName = (propertyName: string) => (this._propertyName = propertyName);
  public setMapping = (mapping: DiscriminatorMap) => (this._mapping = mapping);
}
