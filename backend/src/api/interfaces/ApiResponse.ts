export interface ApiResponse {
    body: {
        data?: any,
        message?: any
    }
    statusCode: number
}