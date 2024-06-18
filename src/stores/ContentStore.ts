import { Schema } from '../schema';

export class ContentStore {
  private schema: Schema;

  constructor(
    private contentType?: string,
    private readonly segment?: any,
  ) {
    if (contentType && segment) {
      this.setSchema(new Schema(contentType, segment['schema']));
    }
  }

  public getSchema = (): Schema => this.schema;
  public getContentType = (): string => this.contentType;

  public setSchema = (schema: Schema) => (this.schema = schema);
  public setContentType = (contentType: string) => (this.contentType = contentType);
}
