// FILE        : backend\src\api\utils\genres.ts
// PROJECT     : Music Recommender
// AUTHORS     : Conor Barr, Joel Malleck, Mike Hammond
// DESCRIPTION : This file has functions for making requests to the Spotify API.

import axios from "axios";
import { Criteria, Track } from "../../models/recommendation";
import { convertRecommendation } from "./convertRecommendation";
import { spotifyAccessToken } from "./spotifyAuthorization";

const spotifyBaseUrl = "https://api.spotify.com/v1";

export const getRecommendation = async (recommendation: Criteria) : Promise<Track[]> => {
    const { data } = await axios.get(`${spotifyBaseUrl}/recommendations`, {
        headers: {
            "Authorization": `Bearer ${spotifyAccessToken}`,
        },
        params: {
            limit: recommendation.amount,
            seed_genres: recommendation.genres.join(","),
            valence: recommendation.happiness,
            target_danceability: recommendation.grooviness,
            target_energy: recommendation.energy,
            target_acousticness: recommendation.acousticness,
            target_duration_ms: recommendation.duration,
            target_speechiness: recommendation.speechiness,
            target_popularity: recommendation.popularity,
            target_tempo: recommendation.tempo,
        }
    });

    return convertRecommendation(data.tracks);
}

export const getSpotifyGenres = async () : Promise<string[]> => {
    const { data } = await axios.get(`${spotifyBaseUrl}/recommendations/available-genre-seeds`, {
        headers: {
            "Authorization": `Bearer ${spotifyAccessToken}`,
        },
    });

    return data.genres;
}