import { Router } from "express";
import searchController from "../controllers/searchController";
import wrapRequestHandler from "../wrapRequestHandler";

const searchRouter = Router();

searchRouter.get("/", wrapRequestHandler(searchController.getSearch));

export default searchRouter;