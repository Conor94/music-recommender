import { Router } from "express";

const router = Router();

router.post("/recommendation", (req, res) => {
    res.send("Create a song recommendation");
});

router.get("/recommendation/:preset", (req, res) => {
    res.send("Gets a song recommendation using preset values");
});

router.get("/search", (req, res) => {
    res.send("Get random search from database or top X searches");
});

router.get("/count", (req, res) => {
    res.send("Get the total number of recommendations made");
});

export default router;