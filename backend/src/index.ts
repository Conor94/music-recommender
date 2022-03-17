import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import config from "./config";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(config.port, config.host, () => {
    console.log(`Server is up on ${config.host}:${config.port}`);
});