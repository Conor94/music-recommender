import { Router } from "express";
import recommendationRouter from "./routes/recommendation";
import searchRouter from "./routes/search";

const router = Router();

router.use("/search", searchRouter)
router.use("/recommendation", recommendationRouter);

export default router;