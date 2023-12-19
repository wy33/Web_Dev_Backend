// Import postgres setup
const createDB = require('./database/postgresDB');

// Import express library
const express = require('express');

// Create express server
const app = express()

// Port number to listen to
const port = 3001

// Import defined express routes in "routes" folder
const routes = require('./routes');


const db = require('./database/sequelizeORM')

// Sync database
const syncDB = async () => {
  try {
    await db.sync();
  } catch (err) {
    console.error('Failed to sync database', err);
  }
}

const configureApp = async () => {
  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Hello World! (root)')
  });
  
  app.get('/1', (req, res) => {
      res.send('Hello World! 1 (top level index.js)')
    });
  
  // Add routes to app
  app.use('', routes);
}

// Configure and start app
const bootApp = async () => {
  // Create database if it doesn't exist
  await createDB();

  await syncDB();

  await configureApp();
}

bootApp();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});