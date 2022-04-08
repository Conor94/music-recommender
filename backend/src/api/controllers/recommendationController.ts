import { RecommendationCriteria } from "../../models/recommendation";
import ApiError from "../errorHandling/ApiError";
import { ApiRequest } from "../interfaces/ApiRequest";
import { ApiResponse } from "../interfaces/ApiResponse";
import { RecommendationRequest } from "../interfaces/RecommendationRequest";
import { getRecommendation, getSpotifyGenres } from "../utils/spotifyRequests";

const recommendationController = {
    /**
     * Gets a song recommendation using the Spotify API. The recommendation is saved in a database.
     * @param req Request that contains the song characteristics that are used to get the recommendation.
     * @returns The song recommendations.
     */
    async createSongRecommendation(req: RecommendationRequest) : Promise<ApiResponse> {
        const criteria: RecommendationCriteria = req.body;
        
        if (!criteria.seedGenres || criteria.seedGenres.length < 1 || !criteria.seedGenres[0]) {
            throw new ApiError("Minimum number of seedGenres is 1", 400);
        }

        if (criteria.seedGenres.length > 5) {
            throw new ApiError("Maximum number of seedGenres is 5", 400);
        }

        // Make sure every parameter that was passed with the body has a value
        for (const [_key, value] of Object.entries(criteria)) {
            if (!value) {
                throw new ApiError("All provided parameters parameters must have a value", 400);            
            }
        }

        // Get a recommendations using the Spotify API
        const recommendations = await getRecommendation(criteria);
        
        if (!(await RecommendationCriteria.create(criteria))) {
            console.log("Failed to save recommendation to the database");
        }

        return {
            body: {
                data: recommendations,
            },
            statusCode: 200
        };
    },

    /**
     * Gets all genres that can be used for song recommendations with the Spotify API.
     * @returns All genres as an array of strings.
     */
    async getGenres() : Promise<ApiResponse> {
        const genres = await getSpotifyGenres();

        return {
            body: {
                data: genres,
            },
            statusCode: 200,
        }
    },

    async getRecommendationPreset(req: ApiRequest) : Promise<ApiResponse> {
        return {
            body: {
                message: "Gets a song recommendation using preset values"
            },
            statusCode: 501
        };
    },

    /**
     * Gets the total number of recommendations that have been made generated.
     * @returns The total number of recommendations.
     */
    async getTotalRecommendations() : Promise<ApiResponse> {
        const count = await RecommendationCriteria.count();

        return {
            body: {
                data: count,
            },
            statusCode: 200
        };
    }
};

export default recommendationController;