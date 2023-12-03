


// Import express
const express = require('express');

const router = express.Router();

// Import test routes
const testRouter = require('./test');

// Use test routes, URL "/test/..."
router.use('/test', testRouter);

// Export router and its routes
module.exports = router;