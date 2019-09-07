// const express = require('express')
import express from 'express';
import config from 'dotenv';

import TweetsAPI from './api/tweets'
const path = require('path');
var cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors({
  origin: 'http://localhost:3000'
}))

config.config();

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../build"));
} else {
  app.use(express.static(path.resolve(__dirname, '../public')));
}

// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

app.get('/api/search/tweets', TweetsAPI.getByKeyword)

// // All remaining requests return the React app, so it can handle routing.
// app.get('*', function(request, response) {
//   response.sendFile(path.resolve(__dirname, '../public/index.html'));
// });

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});