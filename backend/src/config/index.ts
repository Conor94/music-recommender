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