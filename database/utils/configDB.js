const dbName = 'anime';
const dbUser = 'postgres';
const dbPassword = 'password';
const host = 'localhost';
const port = 5432;

const config = {
    user: dbUser,
    host: host,
    port: port,
    password: dbPassword
};

module.exports = {
    dbName,
    config
};