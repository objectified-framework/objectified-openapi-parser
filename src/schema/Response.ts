import {ResponseStore} from '../stores/ResponseStore';

export class Response {
  private responseCode: string;
  private response: ResponseStore;

  constructor(private readonly segment: any) {

  }

  public getResponseCode = (): string => this.responseCode;
  public getResponse = (): ResponseStore => this.response;

  public setResponseCode = (responseCode: string) => this.responseCode = responseCode;
  public setResponse = (response: ResponseStore) => this.response = response;
}