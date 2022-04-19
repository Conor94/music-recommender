export default interface Recommendation {
    album: Album;
    artists: Artist[];
    song: Song;
}

export interface Album {
    title: string;
    imageUrl: string;
    url: string;
}

export interface Artist {
    title: string;
    url: string;
}

export interface Song {
    title: string;
    durationMs: number;
    url: string;
}

export interface SavedRecommendations {
    tracks: Recommendation[];
}
