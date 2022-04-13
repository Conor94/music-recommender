import { Router } from "express";
import genreRouter from "./routes/genres";
import recommendationRouter from "./routes/recommendation";
import searchRouter from "./routes/search";

const router = Router();

router.use("/search", searchRouter)
router.use("/recommendation", recommendationRouter);
router.use("/genres", genreRouter);

export default router;