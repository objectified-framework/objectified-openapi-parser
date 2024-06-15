import {PropertyStore} from '../stores';

export class Schema {
  private type: string;
  private description: string;
  private ref: string;
  private required: string[];
  private properties: PropertyStore[];

  constructor(private readonly name: string, private readonly segment: any) {
    if (!segment['type'] && !segment['$ref']) {
      if (segment['properties']) {
        throw new Error('Segment failed to process: missing "type" and "$ref": has properties, maybe this type should be "object"?');
      }

      throw new Error('Segment failed to process: missing "type" and "$ref"');
    }

    if (segment['$ref']) {
      this.ref = segment['$ref'];
    }

    const schemaType = (segment['type'] ?? '').trim().toLowerCase();
    const schemaRequired = segment['required'] ?? [];
    const schemaDescription = segment['description'] ?? '';

    if (!schemaType && this.ref) {
      this.type = 'object';
    } else {
      this.type = schemaType;
    }

    this.required = schemaRequired;
    this.description = schemaDescription.trim();

    console.log(`[Schema]: name=${name} type=${schemaType} required=${schemaRequired.toString()} description=${schemaDescription.trim()}`);

    if (segment['properties']) {
      const schemaProperties = segment['properties'];
      const schemaPropertyNames = Object.keys(schemaProperties);

      console.log(`[Schema]: Contains ${schemaPropertyNames.length} properties`);

      for(const propertyName of schemaPropertyNames) {
        const propertySchema = schemaProperties[propertyName];

        if (!this.properties) {
          this.properties = [];
        }

        this.properties.push(new PropertyStore(propertyName, propertySchema));
      }
    }
  }

  public setType = (type: string) => this.type = type;
  public setDescription = (description: string) => this.description = description;
  public setRef = (ref: string) => this.ref = ref;
  public setRequired = (required: string[]) => this.required = required;
  public setProperties = (properties: PropertyStore[]) => this.properties = properties;

  public getName = (): string => this.name;
  public getType = (): string => this.type;
  public getDescription = (): string => this.description;
  public getRef = (): string => this.ref;
  public getRequired = (): string[] => this.required;
  public getProperties = (): PropertyStore[] => this.properties;

  public isObject = (): boolean => this.type != null && this.type.toLowerCase() === 'object';

  public addRequired = (required: string) => this.required.push(required);
  public addProperty = (property: PropertyStore) => this.properties.push(property);
}