/**
 * ParsingError is an `Error` that is thrown when the `parse` function within a `Schema` class fails.
 */
export class ParsingError extends Error {
  constructor(message: string, asserter = undefined) {
    super(message);
    Error.captureStackTrace?.(this, asserter || this.constructor);
  }
}
