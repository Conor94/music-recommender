import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import config from "./config";
import router from "./api/router";
import errorHandler from "./api/errorHandling/errorHandler";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", router);
app.use(errorHandler);

app.listen(config.port, config.host, () => {
    console.log(`Server is up on ${config.host}:${config.port}`);
});