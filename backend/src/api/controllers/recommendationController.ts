// FILE        : backend\src\api\controllers\recommendationController.ts
// PROJECT     : Music Recommender
// AUTHORS     : Conor Barr, Joel Malleck, Mike Hammond
// DESCRIPTION : Controller for the recommendations endpoint.

import { Criteria, Recommendation } from "../../models/recommendation";
import ApiError from "../errorHandling/ApiError";
import { ApiResponse } from "../interfaces/ApiResponse";
import { RecommendationRequest } from "../interfaces/RecommendationRequest";
import { getRecommendation as getRecommendedTracks } from "../utils/spotifyRequests";

const recommendationController = {
    /**
     * Gets a song recommendation using the Spotify API. The recommendation is saved in a database.
     * @param req Request that contains the song characteristics that are used to get the recommendation.
     * @returns The song recommendations.
     */
    async createSongRecommendation(req: RecommendationRequest) : Promise<ApiResponse> {
        const criteria: Criteria = req.body;
        
        if (!criteria.genres || criteria.genres.length < 1 || !criteria.genres[0]) {
            throw new ApiError("Minimum number of genres is 1", 400);
        }

        if (criteria.genres.length > 5) {
            throw new ApiError("Maximum number of genres is 5", 400);
        }

        // Make sure every parameter that was passed with the body has a value
        for (const [_key, value] of Object.entries(criteria)) {
            if (!value) {
                throw new ApiError("All provided parameters parameters must have a value", 400);            
            }
        }

        // Get a recommendations using the Spotify API
        const recommendedTracks = await getRecommendedTracks(criteria);
        
        // Save the recommendation criteria and tracks to the database
        if (!(await Recommendation.create({
            criteria,
            tracks: recommendedTracks,
        }))) {
            console.log("Failed to save recommendation to the database");
        }

        return {
            body: {
                data: recommendedTracks,
            },
            statusCode: 200
        };
    },

    /**
     * Gets the total number of recommendations that have been made generated.
     * @returns The total number of recommendations.
     */
    async getTotalRecommendations() : Promise<ApiResponse> {
        const count = await Recommendation.count();

        return {
            body: {
                data: count,
            },
            statusCode: 200
        };
    }
};

export default recommendationController;