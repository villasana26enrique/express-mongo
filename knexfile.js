require('dotenv').config();

const dbConfig = {
    server: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
};

module.exports = {
    test: {
        client: process.env.DB_CLIENT,
        connection: dbConfig,
        migrations: {
            directory: './database/src/migrations'
        },
        seeds: {
            directory: './database/src/seeds'
        }
    },
    development: {
        client: process.env.DB_CLIENT,
        connection: dbConfig,
        migrations: {
            directory: './database/src/migrations'
        },
        seeds: {
            directory: './database/src/seeds'
        }
    },
    production: {
        client: process.env.DB_CLIENT,
        connection: dbConfig,
        migrations: {
            directory: './database/src/migrations'
        },
        seeds: {
            directory: './database/src/seeds'
        }
    }
}