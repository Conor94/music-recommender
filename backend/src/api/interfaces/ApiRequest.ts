// FILE        : backend\src\api\interfaces\ApiRequest.ts
// PROJECT     : Music Recommender
// AUTHORS     : Conor Barr, Joel Malleck, Mike Hammond
// DESCRIPTION : Defines a generic API request.

export interface ApiRequest {
    body?: any,
    query?: any,
    params?: any
}