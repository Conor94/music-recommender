/*
    Defines an error handler for the API. It's purpose is to return a 500 Internal Server Error
    status code when an unknown error occurs with the API. An unknown error is considered an
    error that is not of type ApiError.
*/

import { Request, Response } from "express";
import ApiError from "./ApiError";

const errorHandler = (error: ApiError, req: Request, res: Response, next) => {
    const errResponse = {
        message: error.message,
        stack: error.stack,
    };

    console.log(errResponse);

    // When no status code is provided, send back 500 Internal Server Error.
    // This will also handle cases where the error object is just a built-in Error object.
    res.status(error.statusCode ?? 500).send(errResponse);
};

export default errorHandler;