const knex = require('./connection');

knex.seed.run().then(() => {
    console.log('Seeded successfully!')
    process.exit(0)
})