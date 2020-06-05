'use strict';

// this brings in our express library which is our server
const express = require('express');

// initalizes our express library into the variable app
const app = express();

// this library got into our .env file, and gets our variables so we can use them
require('dotenv').config();

// hey express, find the public folder, and serve files from there
app.use(express.static('./public'));

const PORT = process.env.PORT;
 
// going to the '/' route and sending the string 'Hello - I like pizza'
// app.get('/', function (request, response) {
//   response.send('Hello - I like pizza')
// })

// app.get('/bananas', (request, response) => {
//   response.send('I am bananas about bananas');
// })
 
// turning on the server and consoling logging the port
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})

// app.listen(3000);