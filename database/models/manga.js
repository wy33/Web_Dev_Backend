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
        type: Sequelize.STRING,
        allowNull: false
    },
    genres: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    rating: {
        type: Sequelize.SMALLINT

    }
});

module.exports = Manga;