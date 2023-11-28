// Import express library
const express = require('express');

// Create express server
const app = express()

// Port number to listen to
const port = 3000

// Import defined express routes in "routes" folder
const routes = require('./routes');

//
app.get('/', (req, res) => {
  res.send('Hello World! (root)')
});

app.get('/1', (req, res) => {
    res.send('Hello World! 1 (top level index.js)')
  });

// Add routes to app
app.use('', routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});