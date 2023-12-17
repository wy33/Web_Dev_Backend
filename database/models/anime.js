// Import Sequelize
const Sequelize = require('sequelize');

// Import connected Sequelize instance
const db = require('../sequelizeORM');

const Anime = db.define('anime', {
    id: {
        type: Sequelize.INTEGER,//Sequelize.UUID
        allowNull: false,
        primaryKey: true
        
    },
    title: {
        type: Sequelize.STRING
    },
    author_id: {
        type: Sequelize.INTEGER
    },
    genre: {
        type: Sequelize.STRING
    },
    rating: {
        type: Sequelize.SMALLINT

    }
});

module.exports = Anime;