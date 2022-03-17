import path from "path";

export const __dirname = path.resolve();

const config = {
    host: process.env.HOST || "localhost",
    port: parseInt(process.env.PORT) || 3000
};

export default config;