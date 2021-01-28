exports.up = function(knex) {
    return knex.schema
        .createTable('user_types', (table) => {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.string('description').notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_types')
};