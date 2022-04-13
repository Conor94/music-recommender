import { Router } from "express";
import searchController from "../controllers/searchController";
import wrapRequestHandler from "../utils/wrapRequestHandler";

const searchRouter = Router();

searchRouter.get("/genre", wrapRequestHandler(searchController.getRandomSearchByGenre));

searchRouter.get("/random", wrapRequestHandler(searchController.getRandomSearch));

export default searchRouter;