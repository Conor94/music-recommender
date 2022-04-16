import mongoose, { Schema } from "mongoose";

export interface Criteria {
    genres: string[];
    amount: number;
    happiness: number;
    grooviness: number;
    acousticness: number;
    duration: number;
    energy: number;
    speechiness: number;
    tempo: number;
    popularity: number;
}

export interface Track {
    song: Song;
    artists: Artist[];
    album: Album;
}

export interface Song {
    title: string;
    /** Duration of the song in milliseconds. */
    durationMs: number; 
    url: string;
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

export interface Recommendation {
    criteria: Criteria;
    tracks: Track[];
}

const criteriaSchema = new Schema<Criteria>({
    genres: {
        type: [String],
        required: true,
        validate: (seedGenres: string[]) => seedGenres.length >= 1,
    },

    amount: {
        type: Number,
    },

    happiness: {
        type: Number,
    },

    grooviness: {
        type: Number,
    },

    acousticness: {
        type: Number,
    },

    duration: {
        type: Number,
    },

    energy: {
        type: Number,
    },

    speechiness: {
        type: Number,
    },

    tempo: {
        type: Number,
    },

    popularity: {
        type: Number,
    },
});

const songSchema = new Schema<Song>({
    title: {
        type: String,
        required: true,
    },

    durationMs: {
        type: Number,
        required: true,
    },

    url: {
        type: String,
        required: true,
    },
});

const albumSchema = new Schema<Album>({
    title: {
        type: String,
        required: true,
    },

    imageUrl: {
        type: String,
        required: false,
    },

    url: {
        type: String,
        required: true,
    }
});

const artistSchema = new Schema<Artist>({
    title: {
        type: String,
        required: true,
    },

    url: {
        type: String,
        required: true,
    },
});

const trackSchema = new Schema<Track>({
    song: {
        type: songSchema,
        required: true,
    },

    artists: {
        type: [artistSchema],
        required: true,
    },

    album: {
        type: albumSchema,
        required: true,
    },
});

const recommendationSchema = new Schema<Recommendation>({
    criteria: {
        type: criteriaSchema,
        required: true,
    },

    tracks: {
        type: [trackSchema],
        required: true,
    },
});

export const Recommendation = mongoose.model("Recommendation", recommendationSchema);