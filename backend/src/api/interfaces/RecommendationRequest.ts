// FILE        : backend\src\api\interfaces\RecommendationRequest.ts
// PROJECT     : Music Recommender
// AUTHORS     : Conor Barr, Joel Malleck, Mike Hammond
// DESCRIPTION : Defines a request for a recommendation.

import { Criteria } from "../../models/recommendation";

export interface RecommendationRequest {
    body?: Criteria;
    params?: any;
    query?: any;
}