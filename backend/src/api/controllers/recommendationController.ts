import { ApiRequest } from "../interfaces/ApiRequest";
import { ApiResponse } from "../interfaces/ApiResponse";

const recommendationController = {
    async createSongRecommendation(req: ApiRequest) : Promise<ApiResponse> {
        return {
            body: {
                message: "Create a song recommendation"
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