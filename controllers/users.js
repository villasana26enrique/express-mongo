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
                    message: 'Usuario creado!',
                    usuario: data
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

    static async getUser(id) {
        return await User.findById(id)
            .then((user) => {
                return user
            })
            .catch((err) => {
                return {
                    error: true,
                    message: `Error al obtener usuario con el id: ${ id }`,
                }
            });
    }

    static async deleteUser(id) {
        return await User.findByIdAndRemove(id)
            .then((user) => {
                if (!user) {
                    return {
                        message: `No existe usuario asociado al id: ${ id }`
                    }
                }
                return {
                    message: 'Usuario eliminado de manera exitosa!'
                }
            })
            .catch((err) => {
                return {
                    error: true,
                    message: 'Ha ocurrido un problema al eliminar usuario.'
                }
            });
    }

    static async update(id, data) {
        /* El "new: true" se utiliza para retornar 
         * el objeto modificado en vez del original
         */
        return await User.findByIdAndUpdate(id, data, { new: true })
            .then((user) => {
                if (!user) {
                    return {
                        message: 'No se ha encontrado usuario.'
                    }
                }
                return {
                    message: 'Usuario Actualizado',
                    usuario: user
                }
            })
            .catch((err) => {
                return {
                    error: true,
                    message: 'Ha ocurrido un error al actualizar'
                }
            });
    }
}

module.exports = UsersController;