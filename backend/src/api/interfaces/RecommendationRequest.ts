import { RecommendationCriteria } from "../../models/recommendation";

export interface RecommendationRequest {
    body?: RecommendationCriteria;
    params?: any;
    query?: any;
}