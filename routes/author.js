const express = require('express');

const router = express.Router();

const { Anime, Author, Manga } = require('../database/models');

const asyncHandler = require('express-async-handler');

router.get('/', asyncHandler(async (req, res) => {
    let author = await Author.findAll();
    res.status(200).json(author);
}));

module.exports = router;