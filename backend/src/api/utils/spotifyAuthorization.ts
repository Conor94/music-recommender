// FILE        : backend\src\api\utils\genres.ts
// PROJECT     : Music Recommender
// AUTHORS     : Conor Barr, Joel Malleck, Mike Hammond
// DESCRIPTION : This file has a function that gets a Spotify access token and renews it before it expires.

import axios from "axios";
import config from "../../config";

export let spotifyAccessToken: string = "";

const getSpotifyAccessToken = (renew: boolean) => {
    axios.post("https://accounts.spotify.com/api/token", null, {
        headers: {
            "Authorization": `Basic ${Buffer.from(`${config.spotifyClientId}:${config.spotifyClientSecret}`).toString("base64")}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        params: {
            "grant_type": "client_credentials",
        },
    }).then((res) => {
        spotifyAccessToken = res.data.access_token;

        if (renew) {
            setTimeout(() => {
                console.log("Spotify access token has expired and will be renewed");
        
                getSpotifyAccessToken(true);
            }, (res.data.expires_in - 30) * 1000); // Renew token 30 seconds before it expires
        }
    }).catch((reason) => {
        console.log(`Failed to retrieve access token. Reason: ${reason.response.data.error_description}`);
    });
};

export default getSpotifyAccessToken;