import { Router } from "express";
import recommendationController from "../controllers/recommendationController";
import wrapRequestHandler from "../wrapRequestHandler";

const recommendationRouter = Router();

recommendationRouter.post("/", wrapRequestHandler(recommendationController.createSongRecommendation));

recommendationRouter.get("/:preset", wrapRequestHandler(recommendationController.getRecommendationPreset));

recommendationRouter.get("/count", wrapRequestHandler(recommendationController.getTotalRecommendations));

export default recommendationRouter;