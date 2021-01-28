require('dotenv').config();

const dbConfig = {
    server: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
};

const knex = require('knex')({
    client: process.env.DB_CLIENT,
    connection: dbConfig,
    migrations: {
        directory: './migrations'
    },
    seeds: {
        directory: './seeds'
    },
    useNullAsDefault: false
});

module.exports = knex;