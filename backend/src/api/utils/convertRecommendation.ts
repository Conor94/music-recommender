// FILE        : backend\src\api\utils\genres.ts
// PROJECT     : Music Recommender
// AUTHORS     : Conor Barr, Joel Malleck, Mike Hammond
// DESCRIPTION :
//  This file has a utility function for converting recommendations from the Spotify
//  API into the format used by this app.

import { Track } from "../../models/recommendation";

export const convertRecommendation = (tracks: any[]) : Track[] => {
    return tracks.map((track) => {
        return {
            song: {
                title: track.name,
                durationMs: track.duration_ms,
                url: track.external_urls.spotify,
            },
            artists: track.artists.map((artist) => {
                return {
                    title: artist.name,
                    url: artist.external_urls.spotify,
                }
            }),
            album: {
                title: track.album.name,
                imageUrl: track.album.images[0].url ?? undefined,
                url: track.external_urls.spotify,
            },
        }
    });
}