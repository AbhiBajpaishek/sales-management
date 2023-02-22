import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    if (process.env.ENVIRONMENT === 'dev') {
      return res.status(statusCode).json({
        status: err.status || 'fail',
        message: err.message,
        stackTrace: err.stack,
      });
    }
    res.status(statusCode).json({
      status: err.status || 'fail',
      message: err.message,
    });
  };
  