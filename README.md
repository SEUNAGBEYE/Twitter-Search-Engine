# Twitter-Search-Engine

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

# Installation
- Clone the app and follow the instruction below to setup the app
### Server
- In the root directory run `npm install` to install all dependencies
- Run the command to generate a `BEARER TOKEN` for authentication ```curl -u 'apiKey:secretKey' \
  --data 'grant_type=client_credentials' \
  'https://api.twitter.com/oauth2/token'```
- Create a `.env` file from `.env.sample` and SET `BEARER_TOKEN` to the newly generated token
- Run `npm start` to start to start the server on port `3001`
### Frontend
- Change directory: `cd client`
- In the root directory run `npm install` to install all dependencies
- Create a `.env` file from `.env.sample` and SET `REACT_APP_API_HOST` to `http://localhost:3001`
- Run `npm start` to start to start the server on port `3000`
