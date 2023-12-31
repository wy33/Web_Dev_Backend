const express = require('express');

const asyncHandler = require('express-async-handler');

const router = express.Router();

const Sequelize = require('sequelize');

const { Manga, Author } = require('../database/models');

router.get('/', asyncHandler(async (req, res) => {
    let manga = await Manga.findAll();
    res.status(200).json(manga);
}));

router.get('/:query', asyncHandler(async (req, res) => {
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
    if (req.query.hasOwnProperty('genres')) {
        // Array of genres
        let genres = req.query.genres.split(',');

        /*  Only entries that satisfy all genres are retrieved
            Example of how to query for multiple genres in the HTTP request:
        
                localhost:3001/manga/query?genres=genre1,genre2,genre3
        
            Comma separated values
        */
        queryObj.genres = {
            [Sequelize.Op.contains]: genres
        }
    }

    // Query the Manga table
    let manga = await Manga.findAll({
        where: queryObj,
        // A join to Author table, results in an "author" field
        // containing a JSON value with the model's fields
        include: [Author]
    });

    res.status(200).json(manga);
}));

/*  HTTP POST URL:

        localhost:3001/manga

    HTTP JSON body ex:

        {
            "title": "<title>",
            "rating": <number>,
            "genres": ["item1", "item2", ...],
            "authorId": <id>
        }
*/
router.post('/', (req, res, next) => {
    Manga.create(req.body)
        .then(createdManga => res.status(201).json(createdManga))
        .catch(err => next(err));
});

/*  HTTP PUT URL:

        localhost:3001/manga/

    Ex: update Manga entry with id = 3

        localhost:3001/manga/3
    
    HTTP JSON body ex (update values):

        {
            "title": "<new_title_update>",
            "rating": <new_number_update>
        }
*/
router.put('/:id', asyncHandler(async (req, res) => {
    await Manga.update(req.body, {
        where: {
            id: req.params.id
        }
    });

    let manga = await Manga.findByPk(req.params.id);
    res.status(200).json(manga);
}));

/*  HTTP DELETE URL

        localhost:3001/manga/

    Ex: delete Manga entry with id = 3

        localhost:3001/manga/3
*/
router.delete('/:id', (req, res, next) => {
    Manga.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => res.status(200).json('Deleted Manga'))
        .catch(err => next(err));
});

module.exports = router;