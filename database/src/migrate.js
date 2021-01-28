const knex = require('./connection');

const migrate = async() => {
    await knex.migrate.latest();
};

migrate().then(() => {
    console.log('Migrated successfully!');
    process.exit(0);
});