import { ApiRequest } from "../interfaces/ApiRequest";
import { ApiResponse } from "../interfaces/ApiResponse";

const searchController = {
    async getSearch(req: ApiRequest) : Promise<ApiResponse> {
        return {
            body: {
                message: "Get random search from database or top X searches",
            },
            statusCode: 501
        };
    }
};

export default searchController;