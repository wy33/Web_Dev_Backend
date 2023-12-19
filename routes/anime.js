const express = require('express');

const asyncHandler = require('express-async-handler');

const router = express.Router();

const Sequelize = require('sequelize');

const { Anime } = require('../database/models');

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

    // Query the Anime table
    let anime = await Anime.findAll({
        where: queryObj
    });

    res.status(200).json(anime);
}));

/*  HTTP POST URL:

        localhost:3001/anime

    HTTP JSON body ex:

        {
            "title": "<title>",
            "rating": <number>,
            "genres": ["item1", "item2", ...],
            "authorId": <id>
        }
*/
router.post('/', (req, res, next) => {
    console.log(req.body);
    Anime.create(req.body)
        .then(createdAnime => res.status(201).json(createdAnime))
        .catch(err => next(err));
});

/*  HTTP PUT URL:

        localhost:3001/anime/

    Ex: update Anime entry with id = 3

        localhost:3001/anime/3
    
    HTTP JSON body ex (update values):

        {
            "title": "<new_title_update>",
            "rating": <new_number_update>
        }
*/
router.put('/:id', asyncHandler(async (req, res) => {
    await Anime.update(req.body, {
        where: {
            id: req.params.id
        }
    });

    let anime = await Anime.findByPk(req.params.id);
    res.status(200).json(anime);
}));

/*  HTTP DELETE URL

        localhost:3001/anime/

    Ex: delete Anime entry with id = 3

        localhost:3001/anime/3
*/
router.delete('/:id', (req, res, next) => {
    Anime.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => res.status(200).json('Deleted Anime'))
        .catch(err => next(err));
});

module.exports = router;