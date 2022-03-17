import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import config from "./config";
import router from "./routes/router";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", router);

app.listen(config.port, config.host, () => {
    console.log(`Server is up on ${config.host}:${config.port}`);
});