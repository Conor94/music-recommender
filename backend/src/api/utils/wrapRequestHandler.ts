// FILE        : backend\src\api\utils\genres.ts
// PROJECT     : Music Recommender
// AUTHORS     : Conor Barr, Joel Malleck, Mike Hammond
// DESCRIPTION : 
//  Provides a function for creating handlers for requests. The handlers that are created are wrapped with
//  general-purpose code for handling requests and sending responses. Wrapping the handlers like this ensures 
//  the API handles requests and sends responses in a common form.

import { Request, Response } from "express";
import { ApiRequest } from "../interfaces/ApiRequest";
import { ApiResponse } from "../interfaces/ApiResponse";

const hasBody = (req: Request) => {
    return Object.keys(req.body).length !== 0;
};

const convertRequest = (req: Request) => {
    return {
        body: hasBody(req) ? req.body : undefined,
        query: req.query,
        params: req.params
    };
};

type RequestHandler = (req: ApiRequest) => Promise<ApiResponse>;

const wrapRequestHandler = (handler: RequestHandler) => {
    return async (req: Request, res: Response, next) => {
        try {
            const result = await handler(convertRequest(req));

            res.status(result.statusCode).send(result.body);
        } catch (error) {
            next(error);
        }
    };
};

export default wrapRequestHandler;