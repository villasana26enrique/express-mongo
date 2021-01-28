exports.up = function(knex) {
    return knex.schema
        .createTable('users', (table) => {
            table.increments('id').primary();
            table.string('userId').notNullable();
            table.string('name').notNullable();
            table.string('lastname').notNullable();
            table.string('email').notNullable();
            table.string('password').notNullable();
            table.boolean('status', 10).defaultTo(true);
            table.integer('userTypeId').unsigned().notNullable();

            table.timestamps(true, true);
            table.timestamp('last_activity').nullable()
        })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
}