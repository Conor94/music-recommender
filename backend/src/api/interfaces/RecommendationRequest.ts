import { Criteria } from "../../models/recommendation";

export interface RecommendationRequest {
    body?: Criteria;
    params?: any;
    query?: any;
}