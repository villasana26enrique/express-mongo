const { Model } = require('objection');
const knex = require('../database/src/connection');

Model.knex(knex);

class UserType extends Model {
    static get tableName() {
        return 'user_types'
    }
}

module.exports = UserType;