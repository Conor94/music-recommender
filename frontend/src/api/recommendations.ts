import axios from "axios";
import { apiUrl } from "../utils/url";

export const getRecommendationCount = async () => {
    const { data: axiosData } = await axios.get(`${apiUrl}/recommendation/count`);
    return axiosData.data;
};
