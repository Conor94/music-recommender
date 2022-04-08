import { Recommendation } from "../../models/recommendation";
import ApiError from "../errorHandling/ApiError";
import { ApiRequest } from "../interfaces/ApiRequest";
import { ApiResponse } from "../interfaces/ApiResponse";
import { RecommendationRequest } from "../interfaces/RecommendationRequest";
import { getRecommendation } from "../utils/spotifyRequests";

const recommendationController = {
    async createSongRecommendation(req: RecommendationRequest) : Promise<ApiResponse> {
        const body: Recommendation = req.body;
        
        if (!body.seedGenres || body.seedGenres.length < 1 || !body.seedGenres[0]) {
            throw new ApiError("Minimum number of seedGenres is 1", 400);
        }

        if (body.seedGenres.length > 5) {
            throw new ApiError("Maximum number of seedGenres is 5", 400);
        }

        // Make sure every parameter that was passed with the body has a value
        for (const [_key, value] of Object.entries(body)) {
            if (!value) {
                throw new ApiError("All provided parameters parameters must have a value", 400);            
            }
        }

        // Get a recommendation using the Spotify API
        const recommendation = await getRecommendation(body);
        
        //TODO Store the recommendations in the database

        // Return the recommendation
        return {
            body: {
                data: recommendation,
            },
            statusCode: 501
        };
    },

    async getRecommendationPreset(req: ApiRequest) : Promise<ApiResponse> {
        return {
            body: {
                message: "Gets a song recommendation using preset values"
            },
            statusCode: 501
        };
    },

    async getTotalRecommendations(req: ApiRequest) : Promise<ApiResponse> {
        return {
            body: {
                message: "Get the total number of recommendations made"
            },
            statusCode: 501
        };
    }
};

export default recommendationController;