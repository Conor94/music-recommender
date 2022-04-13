# Music Recommender - Backend
## Running the app
Running in development:
```
npm run dev
```

Running in production:
```
npm start
```

## Testing
### Postman
Postman tests can be imported using this link: https://www.getpostman.com/collections/0e323765bb6dd9fd6f6b

Instructions for importing:
1. Open Postman
2. Click File -> Import...
3. Select the Link tab and paste this link https://www.getpostman.com/collections/0e323765bb6dd9fd6f6b
4. Click Continue and then Import

## Spotify API
* Base URI for requests is listed here: https://developer.spotify.com/documentation/web-api/reference/#/
* Documentation for the recommendations API: https://developer.spotify.com/documentation/web-api/reference/#/operations/get-recommendations

### Access Token
An access token is required to make requests using the Spotify API. The Spotify API uses OAuth flows to grant access tokens. Information
about the types of OAuth flows can be found here: https://developer.spotify.com/documentation/general/guides/authorization/. Note that each
flow grants different authorization levels (e.g. some types don't grant access to user resources). This project is currently using the 
*client credentials* workflow.

Steps for getting an access token using the *client credentials* flow:
1. Follow [this guide](https://developer.spotify.com/documentation/general/guides/authorization/app-settings/) to register an app and obtain client credentials
2. Follow [this guide](https://developer.spotify.com/documentation/general/guides/authorization/client-credentials/) to send a POST request to get the access token