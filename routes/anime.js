const express = require('express');

const router = express.Router();

const { Anime, Author, Manga } = require('../database/models');

const asyncHandler = require('express-async-handler');

router.get('/', asyncHandler(async (req, res) => {
    let anime = await Anime.findAll();
    res.status(200).json(anime);
}));

router.get('/:title', asyncHandler(async (req, res) => {
    console.log(req);
    let anime = await Anime.findAll({
        where: {
            title: req.query.title
        }
    });
    res.status(201).json(anime);
}));

module.exports = router;