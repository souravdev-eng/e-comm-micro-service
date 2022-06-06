import { NextFunction, Request, Response } from 'express';
import { BaseError } from '../errors/BaseError';

export const errorHandler = async (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({ errors: err.serializeErrors() });
  }
  res.status(500).send([{ errors: [{ message: 'Something went wrong' }] }]);
};
