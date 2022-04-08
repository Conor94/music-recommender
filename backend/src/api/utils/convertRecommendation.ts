export const convertRecommendation = (tracks: any[]) => {
    return tracks.map((track) => {
        return {
            track: {
                name: track.name,
                url: track.external_urls.spotify,
            },
            artists: track.artists.map((artist) => {
                return {
                    name: artist.name,
                    url: artist.external_urls.spotify,
                }
            }),
            album: {
                name: track.album.name,
                url: track.external_urls.spotify,
            },
        }
    });
}