import axios from "axios";
import { apiUrl } from "../utils/url";

export const getAllGenres = async () => {
    const { data: axiosData } = await axios.get(`${apiUrl}/genres`);
    return axiosData.data;
};
