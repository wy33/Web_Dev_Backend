// const sequelize = require('sequelize');

// const {dbName, dbUser, dbPwd, host} = require('./utils/')

// Import Sequelize
const Sequelize = require('sequelize');

// Import database configuration
const {dbName, config} = require('./utils/configDB');

console.log('Establishing connection to database');

// Establish connection to database via Sequelize ORM
const db = new Sequelize(
    dbName,
    config.user,
    config.password,
    {
        host: config.host,
        dialect: 'postgres',
        port: config.port
    }
);

// Export database connection
module.exports = db;