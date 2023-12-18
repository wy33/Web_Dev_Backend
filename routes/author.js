const express = require('express');

const router = express.Router();

const { Author } = require('../database/models');

const asyncHandler = require('express-async-handler');

router.get('/', asyncHandler(async (req, res) => {
    let author = await Author.findAll();
    res.status(200).json(author);
}));

router.get('/:query', asyncHandler(async (req, res) => {
    console.log(req);

    // Declare object that will hold the query
    const queryObj = {};

    // Determine the WHERE condition from the request parameters
    if (req.query.hasOwnProperty('id')) {
        queryObj.id = req.query.id;
    }
    if (req.query.hasOwnProperty('first_name')) {
        queryObj.first_name = req.query.first_name;
    }
    if (req.query.hasOwnProperty('last_name')) {
        queryObj.last_name = req.query.last_name;
    }

    // Query the Author table
    let author = await Author.findAll({
        where: queryObj
    });

    res.status(200).json(author);
}));

router.post('/', (req, res, next) => {
    console.log(req.body);
    Author.create(req.body)
        .then(createdAuthor => res.status(201).json(createdAuthor))
        .catch(err => next(err));
});

module.exports = router;