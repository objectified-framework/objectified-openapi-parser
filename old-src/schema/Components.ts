import { SecuritySchemeStore } from '../stores';
import { Schema } from '.';

export class Components {
  private schemas: Schema[];
  private securitySchemes: any;

  constructor(private readonly segment?: any) {
    if (segment) {
      if (!segment || !segment['components']) {
        throw new Error('#/components is empty or missing');
      }

      const componentsRoot = segment['components']['schemas'] ?? [];

      if (componentsRoot.length === 0) {
        throw new Error('#/components/schemas is empty or missing');
      }

      const componentsRootKeys = Object.keys(componentsRoot);

      for (const schemaName of componentsRootKeys) {
        const schemaEntry = componentsRoot[schemaName];

        if (!this.schemas) {
          this.schemas = [];
        }

        this.schemas.push(new Schema(schemaName, schemaEntry));
      }

      this.securitySchemes = {};

      if (segment['components']['securitySchemes']) {
        for (const schemeName of Object.keys(segment['components']['securitySchemes'])) {
          const securitySchema = segment['components']['securitySchemes'][schemeName];

          this.securitySchemes[schemeName] = new SecuritySchemeStore(securitySchema);
        }
      }
    }
  }

  public getSchemas = (): Schema[] => this.schemas;
  public getSecuritySchemas = (): any => this.securitySchemes;

  public setSchemas = (schemas: Schema[]) => (this.schemas = schemas);
  public setSecuritySchemas = (securitySchemas: any) => (this.securitySchemes = securitySchemas);
}