const express = require('express');

const router = express.Router();

const { Anime, Author, Manga } = require('../database/models');

const asyncHandler = require('express-async-handler');

router.get('/', asyncHandler(async (req, res) => {
    let author = await Author.findAll();
    res.status(200).json(author);
}));

router.post('/', (req, res, next) => {
    console.log(req.body);
    Author.create(req.body)
        .then(createdAuthor => res.status(201).json(createdAuthor))
        .catch(err => next(err));
    // res.sendStatus(201);

});

module.exports = router;