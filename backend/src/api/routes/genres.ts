// FILE        : backend\src\api\routes\genres.ts
// PROJECT     : Music Recommender
// AUTHORS     : Conor Barr, Joel Malleck, Mike Hammond
// DESCRIPTION : Defines a single route for getting all seed genres for recommendations.

import { Router } from "express";
import genreController from "../controllers/genreController";
import wrapRequestHandler from "../utils/wrapRequestHandler";

const genreRouter = Router();

genreRouter.get("/", wrapRequestHandler(genreController.getGenres));

export default genreRouter;