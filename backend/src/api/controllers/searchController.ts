import { ApiRequest } from "../interfaces/ApiRequest";
import { ApiResponse } from "../interfaces/ApiResponse";

const searchController = {
    async getSearch(req: ApiRequest) : Promise<ApiResponse> {
        return {
            body: {
                message: "Get random search from database or searches between specified dates",
            },
            statusCode: 501
        };
    }
};

export default searchController;