// FILE        : backend\src\index.ts
// PROJECT     : Music Recommender
// AUTHORS     : Conor Barr, Joel Malleck, Mike Hammond
// DESCRIPTION : Performs setup for the backend API server and starts the server.

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import config from "./config";
import router from "./api/router";
import errorHandler from "./api/errorHandling/errorHandler";
import getSpotifyAccessToken from "./api/utils/spotifyAuthorization";
import mongoose from "mongoose";

const app = express();

// Connect to the database
mongoose.connect(config.mongoUri, {
    connectTimeoutMS: 10000,
}).then(() => {
    // Get an access token for the Spotify API
    getSpotifyAccessToken(true);

    // Setup the server
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use("/api", router);
    app.use(errorHandler);

    // Start the server
    app.listen(config.port, config.host, () => {
        console.log(`Server is up on ${config.host}:${config.port}`);
    });
}).catch((error) => {
    console.log({
        message: "Server will not be started because a connection to the database couldn't be established",
        error
    })
});
