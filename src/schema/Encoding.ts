import { Header, Reference } from './sub';

// Covers 4.8.15.1
export type HeaderReferenceMap = {
  [key in string]: Header | Reference;
};

export type EncodingMap = {
  [key in string]: Encoding;
};

/**
 * Encoding is a section of the OpenAPI that is a single encoding definition applied to a single schema property.
 *
 * {@link https://spec.openapis.org/oas/latest.html#encoding-object}
 */
export class Encoding {
  private _contentType: string;
  private _headers: HeaderReferenceMap;
  private _style: string;
  private _explode: boolean;
  private _allowReserved: boolean;

  constructor() {
    this._headers = {};
  }

  /**
   * Parses a segment of an OpenAPI document containing an `Encoding`.
   *
   * @param segment `Encoding` OpenAPI segment.
   * @returns `Encoding` object populated with the provided segment.
   */
  public static parse(segment: any): Encoding {
    const obj = new Encoding();

    obj.setContentType(segment['contentType'] ?? null);
    obj.setStyle(segment['style'] ?? null);
    obj.setExplode(segment['explode'] ?? false);
    obj.setAllowReserved(segment['allowReserved'] ?? false);

    if (segment['headers']) {
      for (const key of Object.keys(segment['headers'])) {
        const value = segment['headers'][key];

        if (Reference.isReference(value)) {
          obj.getHeaders()[key] = Reference.parse(value);
        } else {
          obj.getHeaders()[key] = Header.parse(value);
        }
      }
    }

    return obj;
  }

  /** Retrieves the content type. */
  public getContentType = (): string => this._contentType;

  /** Retrieves the mapping of headers or references. */
  public getHeaders = (): HeaderReferenceMap => this._headers;

  /** Retrieves the style. */
  public getStyle = (): string => this._style;

  /** Retrieves flag indicating if the property values are an array or object. */
  public isExplode = (): boolean => this._explode;

  /** Retrieves flag indicating if the value _SHOULD_ allow reserved characters, defined by RFC3986. */
  public isAllowReserved = (): boolean => this._allowReserved;

  /** Sets the content-type for the encoding. */
  public setContentType = (contentType: string) => (this._contentType = contentType);

  /** Sets a map allowing additional information to be provided as headers. */
  public setHeaders = (headers: HeaderReferenceMap) => (this._headers = headers);

  /** Sets the style describing how the value will be serialized. */
  public setStyle = (style: string) => (this._style = style);

  /** Sets the flag indicating if the property values should store array or object data. */
  public setExplode = (explode: boolean) => (this._explode = explode);

  /** Sets the flag indicating if the parameter value _SHOULD_ allow reserved characters, as defined by RFC3986. */
  public setAllowReserved = (allowReserved: boolean) => (this._allowReserved = allowReserved);

  toString() {
    return `[Encoding] _contentType=${this._contentType} _headers=${this._headers} _style=${this._style} _explode=${this._explode} _allowReserved=${this._allowReserved}`;
  }
}
