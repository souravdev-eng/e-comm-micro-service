import { BaseError } from './BaseError';

export class BadRequestError extends BaseError {
  statusCode = 400;
  constructor(public message: string) {
    super('Bad Request');

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
