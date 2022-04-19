// FILE        : backend\src\api\controllers\searchController.ts
// PROJECT     : Music Recommender
// AUTHORS     : Conor Barr, Joel Malleck, Mike Hammond
// DESCRIPTION : Controller for the random search endpoint.

import { Recommendation } from "../../models/recommendation";
import ApiError from "../errorHandling/ApiError";
import { ApiRequest } from "../interfaces/ApiRequest";
import { ApiResponse } from "../interfaces/ApiResponse";

const searchController = {
    /**
     * Gets a random search from the database for the provided genre.
     * @param req The genre and number of recommendations to retrieve.
     * @returns The searches that were found.
     */
    async getRandomSearchByGenre(req: ApiRequest): Promise<ApiResponse> {
        if (!req.body) {
            throw new ApiError("No body provided", 400);
        }

        if (!req.body.amount || !req.body.genre) {
            throw new ApiError("Amount and genre must be provided", 400);
        }

        // Get a random searches from the provided genre
        const recommendations = await Recommendation.aggregate()
            .match({ "criteria.genres": { $in: [req.body.genre] } })
            .sample(req.body.amount)
            .project({ tracks: 1 });

        if (recommendations.length < 1) {
            return {
                body: {
                    message: "No searches found that match the provided genre",
                },
                statusCode: 404,
            };
        } else {
            return {
                body: {
                    data: recommendations,
                },
                statusCode: 200,
            };
        }
    },

    /**
     * Gets a random number of searches recommendations.
     * @param req The request body should contain the number of searches to retrieve.
     * @returns The searches that were found.
     */
    async getRandomSearch(req: ApiRequest): Promise<ApiResponse> {
        const recommendations = await Recommendation.aggregate().sample(1).project({ tracks: 1 });

        return {
            body: {
                data: recommendations,
            },
            statusCode: 200,
        };
    },
};

export default searchController;
