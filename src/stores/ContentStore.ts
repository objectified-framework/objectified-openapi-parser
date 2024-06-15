import {Schema} from '../schema';

export class ContentStore {
  private schema: Schema;

  constructor(private contentType?: string, private readonly segment?: any) {
    if (contentType && segment) {
      this.schema = new Schema(contentType, segment['schema']);

      console.log(`[ContentStore]: contentType=${contentType}`);
    }
  }

  public getSchema = (): Schema => this.schema;
  public getContentType = (): string => this.contentType;

  public setSchema = (schema: Schema) => this.schema = schema;
  public setContentType = (contentType: string) => this.contentType = contentType;
}
