const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const basePath = '/users';
// Example
// const UsersController = require('../controllers/users');

/* GET users listing. */
router.get(basePath, function(req, res, next) {
    res.send('respond with a resource');
});

// Example with controller
/* router.get(basePath, asyncHandler(async (req, res) => {
    const users = await UsersController.listAll();
    res.status(200).json(users)
})); */

module.exports = {
    router
};