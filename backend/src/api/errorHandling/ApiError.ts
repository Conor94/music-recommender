/*
    Extends the built-in Error class to add fields for REST APIs. All controllers
    should throw this error instead of the built-in Error class so that the error
    is properly handled by the error handler.
*/

class ApiError extends Error {
    public statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);

        this.statusCode = statusCode;
    }
}

export default ApiError;