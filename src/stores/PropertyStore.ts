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

  constructor(
    private name?: string,
    private readonly segment?: any,
  ) {
    this.setReference(segment['$ref'] ?? null);
    this.setType(segment['type'] ? segment['type'].toLowerCase().trim() : null);
    this.setArrayOf(new PropertyStore(this.getName(), segment['items'] ?? []));
    this.setDescription((segment['description'] ?? '').trim());
    this.setFormat((segment['format'] ?? '').trim());
    this.setMinimum(parseInt((segment['minimum'] ?? '0').trim()));
    this.setMaxLength(segment['maxLength'] ? parseInt(segment['maxLength']) : null);
    this.setPattern(segment['pattern'] ?? null);
    this.setDefaultValue(segment['defaultValue'] ?? null);
    this.setEnumValues(segment['enum'] ?? null);
  }

  public setType = (type: string) => (this.type = type);
  public setDescription = (description: string) => (this.description = description);
  public setFormat = (format: string) => (this.format = format);
  public setMinimum = (minimum: number) => (this.minimum = minimum);
  public setMaxLength = (maxLength: number) => (this.maxLength = maxLength);
  public setPattern = (pattern: string) => (this.pattern = pattern);
  public setReference = (reference: string) => (this.reference = reference);
  public setDefaultValue = (defaultValue: string) => (this.defaultValue = defaultValue);
  public setEnumValues = (enumValues: string[]) => (this.enumValues = enumValues);
  public setArrayOf = (arrayOf: PropertyStore) => (this.arrayOf = arrayOf);
  public setName = (name: string) => (this.name = name);

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
