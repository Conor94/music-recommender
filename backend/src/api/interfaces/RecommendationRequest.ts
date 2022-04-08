import { Recommendation } from "../../models/recommendation";

export interface RecommendationRequest {
    body?: Recommendation;
    params?: any;
    query?: any;
}