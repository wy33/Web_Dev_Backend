// Import Sequelize
const Sequelize = require('sequelize');

// Import connected Sequelize instance
const db = require('../sequelizeORM');

// Define Author model
const Author = db.define('author', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
        
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genres: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    }
});

module.exports = Author;