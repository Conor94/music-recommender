// FILE        : backend\src\config\index.ts
// PROJECT     : Music Recommender
// AUTHORS     : Conor Barr, Joel Malleck, Mike Hammond
// DESCRIPTION : Gets environment variables and stores them in a object.

import path from "path";

export const __dirname = path.resolve();

const config = {
    host: process.env.HOST || "localhost",
    port: parseInt(process.env.PORT) || 3000,
    mongoUri: process.env.MONGO_URI,
    spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
    spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
};

export default config;