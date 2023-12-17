const express = require('express');

const router = express.Router();

const { Anime, Author, Manga } = require('../database/models');

const asyncHandler = require('express-async-handler');

router.get('/', asyncHandler(async (req, res) => {
    let author = await Author.findAll();
    res.status(200).json(author);
}));

router.get('/:name', asyncHandler(async (req, res) => {
    console.log(req);

    const queryObj = {};


    if(req.query.hasOwnProperty('first_name')) {
        queryObj.first_name = req.query.first_name
    }
    if(req.query.hasOwnProperty('last_name')) {
        queryObj.last_name = req.query.last_name;
    }
    

    let author = await Author.findAll({
        where: queryObj
        // where: {
        //     first_name: req.query.first_name,
        //     last_name: req.query.last_name
        // }
    });
    res.status(201).json(author);

    // console.log(typeof(obj));
    // console.log(obj.hasOwnProperty('last_name'));
}));

// router.get('/:id', asyncHandler(async (req, res) => {
//     console.log(req);
//     let author = await Author.findAll({
//         where: {
//             id: req.query.id
//         }
//     });
//     res.status(201).json(author);
// }));

// router.get('/:lastname', asyncHandler(async (req, res) => {
//     console.log(req);
//     // let author = await Author.findAll({
//     //     where: {
//     //         first_name: 'test',
//     //         last_name: req.query.last_name
//     //     }
//     // });
//     // res.status(201).json(author);
// }));

router.post('/', (req, res, next) => {
    console.log(req.body);
    Author.create(req.body)
        .then(createdAuthor => res.status(201).json(createdAuthor))
        .catch(err => next(err));
    // res.sendStatus(201);

});

module.exports = router;