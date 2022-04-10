import { Router } from "express";
import recommendationController from "../controllers/recommendationController";
import wrapRequestHandler from "../utils/wrapRequestHandler";

const recommendationRouter = Router();

recommendationRouter.post("/", wrapRequestHandler(recommendationController.createSongRecommendation));

recommendationRouter.get("/count", wrapRequestHandler(recommendationController.getTotalRecommendations));

recommendationRouter.get("/:preset", wrapRequestHandler(recommendationController.getRecommendationPreset));

export default recommendationRouter;