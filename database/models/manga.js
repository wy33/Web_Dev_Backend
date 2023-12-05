// Import Sequelize
const Sequelize = require('sequelize');

// Import connected Sequelize instance
const db = require('../sequelizeORM');

const Manga = db.define('manga', {
    id: {
        type: Sequelize.INTEGER,
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
    isbn: {
        type: Sequelize.STRING
    },
    rating: {
        type: Sequelize.SMALLINT

    }
});

module.exports = Manga;