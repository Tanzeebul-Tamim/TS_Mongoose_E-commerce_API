import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import handleZodError from '../errors/handleZodError';
import handleValidationError from '../errors/handleValidationError';
import handleCastError from '../errors/handleCastError';
import handleDuplicateError from '../errors/handleDuplicateError';
import AppError from '../errors/AppError';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const globalErrorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  //* Setting default values
  let statusCode = 500;
  let message = 'Something went wrong!';

  //! Checking for different kinds of errors and replacing the default values
  //* Zod error instance
  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);

    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
  }

  //* Mongoose validation error
  else if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err);

    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
  }

  //* Mongoose cast error
  else if (err?.name === 'CastError') {
    const simplifiedError = handleCastError(err);

    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
  }

  //* Duplicate index error
  else if (err?.code === 11000) {
    const simplifiedError = handleDuplicateError(err);

    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
  }

  //* Custom AppError instance
  else if (err instanceof AppError) {
    statusCode = err?.statusCode;
    message = err?.message;
  }

  //* Regular TypeScript Error instance
  else if (err instanceof Error) {
    message = err?.message;
  }

  //* Sending response to client
  return res.status(statusCode).json({
    success: false,
    message
  });
};

export default globalErrorHandler;
