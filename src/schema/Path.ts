import {RequestBodyStore, ResponseStore, SecurityStore} from '../stores';

export class Path {
  private operation: string;
  private pathUrl: string;
  private tags: string[];
  private summary: string;
  private operationId: string;
  private description: string;
  private security: SecurityStore;
  private requestBody: RequestBodyStore;
  private responses: ResponseStore[];

  constructor(pathUrl?: string, operation?: string, private readonly segment?: any) {
    if (segment) {
      this.operation = operation;
      this.pathUrl = pathUrl;

      if (!segment['tags']) {
        throw new Error(`Verb '${operation}' contains no associated Tags`);
      }

      if (!segment['responses']) {
        throw new Error(`Verb '${operation}' contains no defined responses`);
      }

      if (!segment['operationId']) {
        throw new Error(`Verb '${operation}' missing operationId`);
      }

      console.log(`[Path]: url=${pathUrl} operation=${operation}`);

      this.tags = segment['tags'];
      this.summary = segment['summary'] ?? null;
      this.operationId = segment['operationId'];
      this.description = segment['description'] ?? null;

      if (segment['security']) {
        this.security = new SecurityStore(segment['security']);
      }

      if (segment['requestBody']) {
        this.requestBody = new RequestBodyStore(segment['requestBody']);
      }

      if (segment['responses']) {
        this.responses = [];

        const responses = segment['responses'];

        for (const responseCode of Object.keys(responses)) {
          this.responses.push(new ResponseStore(responseCode, responses[responseCode]));
        }
      }
    }
  }

  public getOperation = (): string => this.operation;
  public getPathUrl = (): string => this.pathUrl;
  public getTags = (): string[] => this.tags;
  public getSummary = (): string => this.summary;
  public getOperationId = (): string => this.operationId;
  public getDescription = (): string => this.description;
  public getSecurity = (): SecurityStore => this.security;
  public getRequestBody = (): RequestBodyStore => this.requestBody;
  public getResponses = (): ResponseStore[] => this.responses;

  public setOperation = (operation: string) => this.operation = operation;
  public setPathUrl = (pathUrl: string) => this.pathUrl = pathUrl;
  public setTags = (tags: string[]) => this.tags = tags;
  public setSummary = (summary: string) => this.summary = summary;
  public setOperationId = (operationId: string) => this.operationId = operationId;
  public setDescription = (description: string) => this.description = description;
  public setSecurity = (security: SecurityStore) => this.security = security;
  public setRequestBody = (requestBody: RequestBodyStore) => this.requestBody = requestBody;
  public setResponses = (responses: ResponseStore[]) => this.responses = responses;
}
