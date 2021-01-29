const User = require('../models/user');
const bcrypt = require("bcrypt");

class UsersController {

    static async create(data) {

        /*
         * Create a user
         */
        const user = new User({
            email: data.email,
            password: bcrypt.hashSync(data.password, 10),
            name: data.name,
            age: data.age,
            gender: data.gender,
            isActive: data.isActive,
            userType: data.userType,
        })

        /*
         * Save user to database
         */
        return await user
            .save()
            .then((data) => {
                return {
                    error: false,
                    message: 'Usuario creado!'
                }
            })
            .catch((err) => {
                return {
                    error: true,
                    message: 'Ha ocurrido un error.'
                }
            })
    }

    static async listAll() {
        return await User.find()
            .sort({ name: -1 })
            .then((users) => users)
            .catch((err) => {
                return {
                    error: true,
                    message: 'Ha ocurrido un error al obtener el listado'
                }
            });
    }
}

module.exports = UsersController;