const express = require('express');

const asyncHandler = require('express-async-handler');

const router = express.Router();

const Sequelize = require('sequelize');

const { Manga } = require('../database/models');

router.get('/', asyncHandler(async (req, res) => {
    let manga = await Manga.findAll();
    res.status(200).json(manga);
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
    if (req.query.hasOwnProperty('rating')) {
        queryObj.rating = req.query.rating;
    }
    // if (req.query.hasOwnProperty('genre')) {
    //     queryObj.genre = req.query.genre;
    // }
    if (req.query.hasOwnProperty('genres')) {
        // Array of genres
        let genres = req.query.genres.split(',');

        /*  Only entries that satisfy all genres are retrieved
            Example of how to query for multiple genres in the HTTP request:
        
                localhost:3001/author/query?genres=genre1,genre2,genre3
        
            Comma separated values
        */
        queryObj.genres = {
            [Sequelize.Op.contains]: genres
        }
    }

    // Query the Author table
    let manga = await Manga.findAll({
        where: queryObj
    });

    res.status(200).json(manga);
}));

router.post('/', (req, res, next) => {
    console.log(req.body);
    Manga.create(req.body)
        .then(createdManga => res.status(201).json(createdManga))
        .catch(err => next(err));
});

module.exports = router;