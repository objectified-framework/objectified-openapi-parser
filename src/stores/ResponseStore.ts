import {Schema} from '../schema';

export class ResponseStore {
  private description: string;
  private readonly content: any;

  constructor(private responseCode?: string, private readonly segment?: any) {
    if (responseCode && segment) {
      console.log(`[ResponseStore] responseCode=${responseCode}`);

      this.description = segment.description;
      this.content = {};

      if (segment.content) {
        for (const contentType of Object.keys(segment.content)) {
          const schema = new Schema(contentType, segment.content[contentType].schema);

          console.log(`[ResponseStore] Saving schema for content type '${contentType}'`);

          this.content[contentType] = schema;
        }
      }
    }
  }

  public getDescription = (): string => this.description;
  public getContent = (contentType: string): Schema => this.content[contentType];
  public getResponseCode = (): string => this.responseCode;

  public getContentTypes = (): string[] => (this.content != null && Object.keys(this.content)) ?? [];

  public setDescription = (description: string) => this.description = description;
  public setContent = (contentType: string, store: Schema) => this.content[contentType] = store;
  public setResponseCode = (responseCode: string) => this.responseCode = responseCode;
}