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
    song: TrackAttribute;
    artists: TrackAttribute[];
    album: TrackAttribute;
}

// Track attributes are songs, artists, and albums
export interface TrackAttribute {
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

const trackAttributeSchema = new Schema<TrackAttribute>({
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
        type: trackAttributeSchema,
        required: true,
    },

    artists: {
        type: [trackAttributeSchema],
        required: true,
    },

    album: {
        type: trackAttributeSchema,
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