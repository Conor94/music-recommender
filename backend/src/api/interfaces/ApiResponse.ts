// FILE        : backend\src\api\interfaces\ApiResponse.ts
// PROJECT     : Music Recommender
// AUTHORS     : Conor Barr, Joel Malleck, Mike Hammond
// DESCRIPTION : Defines a generic API response.

export interface ApiResponse {
    body: {
        data?: any,
        message?: any
    }
    statusCode: number
}