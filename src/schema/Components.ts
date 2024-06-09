import {Schema} from './Schema';
import {SecuritySchemeStore} from '../stores/SecuritySchemeStore';

export class Components {
  private schemas: Schema[];
  private securitySchemes: any;

  constructor(private readonly segment: any) {
    if (!segment || !segment['components']) {
      throw new Error('#/components is empty or missing');
    }

    const componentsRoot = segment['components']['schemas'] ?? [];

    if (componentsRoot.length === 0) {
      throw new Error('#/components/schemas is empty or missing');
    }

    const componentsRootKeys = Object.keys(componentsRoot);

    console.log(`[Components]: Processing ${componentsRootKeys.length} schema entry/ies`);

    for(const schemaName of componentsRootKeys) {
      const schemaEntry = componentsRoot[schemaName];

      if (!this.schemas) {
        this.schemas = [];
      }

      this.schemas.push(new Schema(schemaName, schemaEntry));
    }

    this.securitySchemes = {};

    if (segment['components']['securitySchemes']) {
      console.log(`[Components]: Parsing security schemes`);

      for(const schemeName of Object.keys(segment['components']['securitySchemes'])) {
        const securitySchema = segment['components']['securitySchemes'][schemeName];

        this.securitySchemes[schemeName] = new SecuritySchemeStore(securitySchema);
        console.log(`[Components]: Added security scheme '${schemeName}'`);
      }
    }
  }

  public getSchemas = (): Schema[] => this.schemas;

  public setSchemas = (schemas: Schema[]) => this.schemas = schemas;
}