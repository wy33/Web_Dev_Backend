const express = require('express');

const router = express.Router();

const { Anime, Author, Manga } = require('../database/models');

const asyncHandler = require('express-async-handler');

router.get('/', asyncHandler(async (req, res) => {
    let manga = await Manga.findAll();
    res.status(200).json(manga);
}));

module.exports = router;