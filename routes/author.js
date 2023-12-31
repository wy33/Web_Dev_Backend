const express = require('express');

const asyncHandler = require('express-async-handler');

const router = express.Router();

const Sequelize = require('sequelize');

const { Author } = require('../database/models');

router.get('/', asyncHandler(async (req, res) => {
    let author = await Author.findAll();
    res.status(200).json(author);
}));

/*  HTTP query URL

        localhost:3001/author/query?

    Ex:

      localhost:3001/author/query?name=Ted
*/
router.get('/:query', asyncHandler(async (req, res) => {
    // Declare object that will hold the query
    const queryObj = {};

    // Determine the WHERE condition from the request parameters
    // All these parameters are ANDed for the WHERE condition
    if (req.query.hasOwnProperty('id')) {
        queryObj.id = req.query.id;
    }
    // if (req.query.hasOwnProperty('first_name')) {
    //     queryObj.first_name = req.query.first_name;
    // }
    // if (req.query.hasOwnProperty('last_name')) {
    //     queryObj.last_name = req.query.last_name;
    // }
    if (req.query.hasOwnProperty('name')) {
        queryObj.name = req.query.name;
    }
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
    let author = await Author.findAll({
        where: queryObj
    });

    res.status(200).json(author);
}));

/*  HTTP POST URL:

        localhost:3001/author

    HTTP JSON body ex:

        {
            "name": "<name>",
            "genres": ["item1", "item2", ...]
        }
*/
router.post('/', (req, res, next) => {
    Author.create(req.body)
        .then(createdAuthor => res.status(201).json(createdAuthor))
        .catch(err => next(err));
});

/*  HTTP PUT URL:

        localhost:3001/author/

    Ex: update Author entry with id = 3

        localhost:3001/author/3
    
    HTTP JSON body ex (update values):

        {
            "name": "<new_name_update>",
            "genres": ["<new_genre>", "<new_genre>"]
        }

    Note: genres array is overwritten not appended
*/
router.put('/:id', asyncHandler(async (req, res) => {
    await Author.update(req.body, {
        where: {
            id: req.params.id
        }
    });

    let author = await Author.findByPk(req.params.id);
    res.status(200).json(author);
}));

/*  HTTP DELETE URL

        localhost:3001/author/

    Ex: delete Author entry with id = 3

        localhost:3001/author/3
*/
router.delete('/:id', (req, res, next) => {
    Author.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => res.status(200).json('Deleted Author'))
        .catch(err => next(err));
});

module.exports = router;