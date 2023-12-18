const express = require('express');

const router = express.Router();

const { Anime } = require('../database/models');

const asyncHandler = require('express-async-handler');

router.get('/', asyncHandler(async (req, res) => {
    let anime = await Anime.findAll();
    res.status(200).json(anime);
}));

router.get('/:query', asyncHandler(async (req, res) => {
    console.log(req);

    // Declare object that will hold the query
    const queryObj = {};

    // Determine the WHERE condition from the request parameters
    if (req.query.hasOwnProperty('id')) {
        queryObj.id = req.query.id;
    }
    if (req.query.hasOwnProperty('title')) {
        queryObj.title = req.query.title;
    }
    if(req.query.hasOwnProperty('rating')) {
        queryObj.rating = req.query.rating
    }
    // if(req.query.hasOwnProperty('genre')) {
    //     queryObj.genre = req.query.genre;
    // }

    // Query the Anime table
    let anime = await Anime.findAll({
        where: queryObj
    });

    res.status(200).json(anime);
}));

module.exports = router;