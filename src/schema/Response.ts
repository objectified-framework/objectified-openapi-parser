import { ResponseStore } from '../stores';

export class Response {
  private responseCode: string;
  private response: ResponseStore;

  constructor(private readonly segment?: any) {
    throw new Error('Response not yet handled');
  }

  public getResponseCode = (): string => this.responseCode;
  public getResponse = (): ResponseStore => this.response;

  public setResponseCode = (responseCode: string) =>
    (this.responseCode = responseCode);
  public setResponse = (response: ResponseStore) => (this.response = response);
}
