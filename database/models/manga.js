// Import Sequelize
const Sequelize = require('sequelize');

// Import connected Sequelize instance
const db = require('../sequelizeORM');

// Define Manga model
const Manga = db.define('manga', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
        
    },
    title: {
        type: Sequelize.STRING
    },
    genres: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    rating: {
        type: Sequelize.FLOAT
    },
    image: {
        type: Sequelize.STRING
    },
    url: {
        type: Sequelize.STRING
    }
});

module.exports = Manga;