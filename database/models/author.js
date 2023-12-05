// Import Sequelize
const Sequelize = require('sequelize');

// Import connected Sequelize instance
const db = require('../sequelizeORM');

const Author = db.define('author', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
        
    },
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    genres: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    }
});

module.exports = Author;