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