// Import express
const express = require('express');

const router = express.Router();

// Import routes
const animeRouter = require('./anime');
const mangaRouter = require('./manga');
const authorRouter = require('./author');

// Use routes
router.use('/anime', animeRouter);
router.use('/manga', mangaRouter);
router.use('/author', authorRouter);

// Export router and its routes
module.exports = router;