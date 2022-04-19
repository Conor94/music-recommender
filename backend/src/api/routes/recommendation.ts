// FILE        : backend\src\api\routes\recommendation.ts
// PROJECT     : Music Recommender
// AUTHORS     : Conor Barr, Joel Malleck, Mike Hammond
// DESCRIPTION : Defines routes for getting song recommendations and total number of recommendations.

import { Router } from "express";
import recommendationController from "../controllers/recommendationController";
import wrapRequestHandler from "../utils/wrapRequestHandler";

const recommendationRouter = Router();

recommendationRouter.post("/", wrapRequestHandler(recommendationController.createSongRecommendation));

recommendationRouter.get("/count", wrapRequestHandler(recommendationController.getTotalRecommendations));

export default recommendationRouter;