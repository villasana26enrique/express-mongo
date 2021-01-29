const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const basePath = '/users';
// Example
const UsersController = require('../controllers/users');

/* GET users listing. */
/* router.get(basePath, function(req, res, next) {
    res.send('respond with a resource');
}); */

// Create User
router.post(basePath, asyncHandler(async(req, res) => {
    /**
     * validation request
     */
    if (!req.body.email || !req.body.password || !req.body.name) {
        return res.status(400).send({
            message: "Campos Requeridos no pueden estar vacíos.",
        });
    }
    const users = await UsersController.create(req.body);
    if (users.error) {
        return res.status(500).json(users)
    }
    res.status(200).json(users)
}));

//listAll
router.get(basePath, asyncHandler(async(req, res) => {
    const users = await UsersController.listAll();
    if (users.error) {
        return res.status(500).json(users)
    }
    res.status(200).json(users)
}));

//Finding one user
router.get(`${ basePath }/:id`, asyncHandler(async(req, res) => {
    const users = await UsersController.getUser(req.params.id);
    if (users.error) {
        return res.status(500).json(users)
    }
    res.status(200).json(users)
}));

router.delete(`${ basePath }/:id`, asyncHandler(async(req, res) => {
    const user = await UsersController.deleteUser(req.params.id);
    if (user.error) {
        return res.status(500).json(user)
    }
    res.status(200).json(user)
}));

module.exports = {
    router
};