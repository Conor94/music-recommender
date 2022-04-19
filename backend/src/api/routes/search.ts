// FILE        : backend\src\api\routes\recommendation.ts
// PROJECT     : Music Recommender
// AUTHORS     : Conor Barr, Joel Malleck, Mike Hammond
// DESCRIPTION : Defines routes for searching the database for recommendations that have already been made.

import { Router } from "express";
import searchController from "../controllers/searchController";
import wrapRequestHandler from "../utils/wrapRequestHandler";

const searchRouter = Router();

searchRouter.get("/genre", wrapRequestHandler(searchController.getRandomSearchByGenre));

searchRouter.get("/random", wrapRequestHandler(searchController.getRandomSearch));

export default searchRouter;