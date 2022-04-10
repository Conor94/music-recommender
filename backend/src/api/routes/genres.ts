import { Router } from "express";
import genreController from "../controllers/genreController";
import wrapRequestHandler from "../utils/wrapRequestHandler";

const genreRouter = Router();

genreRouter.get("/", wrapRequestHandler(genreController.getGenres));

export default genreRouter;