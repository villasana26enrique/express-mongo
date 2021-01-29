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
            message: "Required field can not be empty",
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

module.exports = {
    router
};