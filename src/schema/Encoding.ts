import { Header, Reference } from '.';

// Covers 4.8.15.1
export type HeaderReferenceMap = {
  [key in string]: Header | Reference;
};

export type EncodingMap = {
  [key in string]: Encoding;
};

// Covers 4.8.15.1
export class Encoding {
  private _contentType: string;
  private _headers: HeaderReferenceMap;
  private _style: string;
  private _explode: boolean;
  private _allowReserved: boolean;

  constructor() {
    this._headers = {};
  }

  public static parse(segment: any): Encoding {
    const obj = new Encoding();

    return obj;
  }

  public getContentType = (): string => this._contentType;
  public getHeaders = (): HeaderReferenceMap => this._headers;
  public getStyle = (): string => this._style;
  public isExplode = (): boolean => this._explode;
  public isAllowReserved = (): boolean => this._allowReserved;

  public setContentType = (contentType: string) => (this._contentType = contentType);
  public setHeaders = (headers: HeaderReferenceMap) => (this._headers = headers);
  public setStyle = (style: string) => (this._style = style);
  public setExplode = (explode: boolean) => (this._explode = explode);
  public setAllowReserved = (allowReserved: boolean) => (this._allowReserved = allowReserved);
}
