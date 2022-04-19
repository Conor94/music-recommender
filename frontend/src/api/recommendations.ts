import axios from "axios";
import { apiUrl } from "../utils/url";

interface RecommendationRequestData {
    genres: String[];
    amount: number;
    happiness: number;
    grooviness: number;
    energy: number;
    acousticness: number;
    speechiness: number;
    popularity: number;
    tempo: number;
    duration: number;
}

export const getRecommendationCount = async () => {
    const { data: axiosData } = await axios.get(`${apiUrl}/recommendation/count`);
    return axiosData.data;
};

export const createRecommendation = async (body: RecommendationRequestData) => {
    const { data: axiosData } = await axios.post(`${apiUrl}/recommendation`, body);
    return axiosData.data;
};

export const getRandomRecommendation = async () => {
    const { data: axiosData } = await axios.get(`${apiUrl}/search/random`);
    return axiosData.data;
};
