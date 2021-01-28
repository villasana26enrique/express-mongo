const knex = require('./connection');

const rollback = async() => {
    await knex.raw('DROP DATABASE `test_database`;')
    await knex.raw('CREATE DATABASE `test_database` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;')
}

rollback().then(() => {
    console.log('Rollback done successfully!')
    process.exit(0)
})