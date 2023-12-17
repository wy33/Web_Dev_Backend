const express = require('express');

const router = express.Router();

const { Anime } = require('../database/models');

const asyncHandler = require('express-async-handler');

router.get('/', asyncHandler(async (req, res) => {
    let anime = await Anime.findAll();
    res.status(200).json(anime);
}));

router.get('/:title', asyncHandler(async (req, res) => {
    console.log(req);

    // Declare object that will hold the query
    const queryObj = {};

    // Determine the WHERE condition from the request parameters
    if(req.query.hasOwnProperty('title')) {
        queryObj.title = req.query.title;

        let anime = await Anime.findAll({
            where: {
                title: req.query.title
            }
        });
    
        res.status(200).json(anime);
    }
    // if(req.query.hasOwnProperty('genre')) {

    // }
    // if(req.query.hasOwnProperty('last_name')) {
    //     queryObj.last_name = req.query.last_name;
    // }

    // let anime = await Anime.findAll({
    //     where: {
    //         title: req.query.title
    //     }
    // });

    // res.status(200).json(anime);

    res.sendStatus(204);
}));

// router.get('/:genre', asyncHandler(async (req, res) => {
//     console.log('test');

//     queryObj1 = {};

//     if(req.query.hasOwnProperty('genre')) {
//         queryObj1.id = req.query.genre;

//         let anime1 = await Anime.findAll({
//             where: req.query.id
//         });

//         res.status(200).json(anime1);
//     }

//     res.sendStatus(204);
// }));

router.get('/:rating', asyncHandler(async (req, res) => {
    console.log(req);

    // Declare object that will hold the query
    const queryObj1 = {};

    // Determine the WHERE condition from the request parameters
    if(req.query.hasOwnProperty('rating')) {
        queryObj1.rating = req.query.rating;
    }

    let anime1 = await Anime.findAll({
        where: queryObj1
    });

    res.status(200).json(anime1);

    console.log('rating');

}));

module.exports = router;