export class PropertyStore {
  private type: string;
  private description: string;
  private format: string;
  private minimum: number;
  private maxLength: number;
  private pattern: string;
  private reference: string;
  private defaultValue: string;
  private enumValues: string[];
  private arrayOf: PropertyStore;

  constructor(private readonly name: string, private readonly segment: any) {
    if (segment['$ref']) {
      console.log(`[PropertyStore]: References '${segment['$ref']}'`);
      this.reference = segment['$ref'];
    }

    this.type = null;

    if (segment['type'] && !this.reference) {
      const propertyType = segment['type'].toLowerCase().trim();

      if (propertyType === 'array' && !segment['items']) {
        throw new Error(`Property '${name}' contains type 'array' but references no items`);
      }

      if (propertyType === 'array') {
        this.arrayOf = new PropertyStore(this.name, segment['items']);
      }
    }

    this.description = (segment['description'] ?? '').trim();
    this.format = (segment['format'] ?? '').trim();
    this.minimum = parseInt((segment['minimum'] ?? '0').trim());
    this.maxLength = segment['maxLength'] ? parseInt(segment['maxLength']) : null;
    this.pattern = segment['pattern'] ?? null;
    this.defaultValue = segment['defaultValue'] ?? null;
    this.enumValues = segment['enum'] ?? null;
  }

  public setType = (type: string) => this.type = type;
  public setDescription = (description: string) => this.description = description;
  public setFormat = (format: string) => this.format = format;
  public setMinimum = (minimum: number) => this.minimum = minimum;
  public setMaxLength = (maxLength: number) => this.maxLength = maxLength;
  public setPattern = (pattern: string) => this.pattern = pattern;
  public setReference = (reference: string) => this.reference = reference;
  public setDefaultValue = (defaultValue: string) => this.defaultValue = defaultValue;
  public setEnumValues = (enumValues: string[]) => this.enumValues = enumValues;
  public setArrayOf = (arrayOf: PropertyStore) => this.arrayOf = arrayOf;

  public getName = (): string => this.name;
  public getType = (): string => this.type;
  public getDescription = (): string => this.description;
  public getFormat = (): string => this.format;
  public getMinimum = (): number => this.minimum;
  public getMaxLength = (): number => this.maxLength;
  public getPattern = (): string => this.pattern;
  public getReference = (): string => this.reference;
  public getDefaultValue = (): string => this.defaultValue;
  public getEnumValues = (): string[] => this.enumValues;
  public getArrayOf = (): PropertyStore => this.arrayOf;

  public addEnumValue = (value: string) => this.enumValues.push(value);

  public isArray = (): boolean => this.arrayOf != null;
  public isReference = (): boolean => this.reference != null;
}