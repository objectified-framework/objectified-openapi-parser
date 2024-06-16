import {ContentStore} from '.';

export class RequestBodyStore {
  private description: string;
  private required: boolean;
  private contents: ContentStore[];

  constructor(private readonly segment?: any) {
    if (segment) {
      if (!segment['content']) {
        throw new Error('RequestBody does not contain a content definition.');
      }

      this.description = segment['description'];
      this.required = segment['required'];
      this.contents = [];

      const content = segment['content'];

      for (const contentType of Object.keys(content)) {
        const contentTypeSchema = content[contentType];

        // Change to a map operation instead of a for-loop
        this.contents.push(new ContentStore(contentType, contentTypeSchema));
      }
    }
  }

  public getDescription = (): string => this.description;
  public isRequired = (): boolean => this.required;
  public getContents = (): ContentStore[] => this.contents;

  public setDescription = (description: string) => this.description = description;
  public setRequired = (required: boolean) => this.required = required;
  public setContents = (contents: ContentStore[]) => this.contents = contents;
}