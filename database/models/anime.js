// Import Sequelize
const Sequelize = require('sequelize');

// Import connected Sequelize instance
const db = require('../sequelizeORM');

// Define Anime model
const Anime = db.define('anime', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
        
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genre: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    rating: {
        type: Sequelize.SMALLINT
    }
});

module.exports = Anime;