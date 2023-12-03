const pgtools = require('pgtools');

// const pg = require('pg').createdb()

// Import database configuration
const {dbName, config} = require('./utils/configDB');

const createDB = async () => {
    try {
        await pgtools.createdb(config, dbName);
        console.log(`Successfully created database ${dbName}`);
    } catch (err) {
        if (err.name === 'duplicate_database') {
            console.log(`Database ${dbName} already exists`);
            return;
        }
        else {
            console.log('createDB error:', err);
            process.exit(1);
        }
    }
}

module.exports = createDB;