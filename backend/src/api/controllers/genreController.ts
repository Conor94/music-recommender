import { ApiResponse } from "../interfaces/ApiResponse";
import { getSpotifyGenres } from "../utils/spotifyRequests";

const genreController = {
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
}

export default genreController;