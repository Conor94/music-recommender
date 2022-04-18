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