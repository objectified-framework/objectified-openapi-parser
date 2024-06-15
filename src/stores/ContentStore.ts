import {Schema} from '../schema';

export class ContentStore {
  private schema: Schema;

  constructor(private readonly contentType: string, private readonly segment: any) {
    this.schema = new Schema(contentType, segment['schema']);

    console.log(`[ContentStore]: contentType=${contentType}`);
  }

  public getSchema = (): Schema => this.schema;

  public setSchema = (schema: Schema) => this.schema = schema;
}
