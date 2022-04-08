import mongoose, { Schema } from "mongoose";

export interface RecommendationCriteria {
    seedGenres: string[];
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

const recommendationCriteriaSchema = new Schema<RecommendationCriteria>({
    seedGenres: {
        type: [String],
        required: true,
        validate: (seedGenres: string[]) => seedGenres.length > 1,
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

export const RecommendationCriteria = mongoose.model("Recommendation", recommendationCriteriaSchema);