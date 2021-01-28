const { Model } = require('objection');
const knex = require('../database/src/connection');

Model.knex(knex);

class User extends Model {
    static get tableName() {
        return 'users'
    }

    static get relationMappings() {
        const UserType = require('./user_type');
        return {
            user_types: {
                relation: Model.BelongsToOneRelation,
                modelClass: UserType,
                join: {
                    from: 'users.userTypeId',
                    to: 'user_types.id'
                }
            }
        }
    }

}

module.exports = User;