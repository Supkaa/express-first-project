const express = require('express');
const UserController = require('../app/Controller/UserController');
const router = express.Router();

router.get('/users/:id', UserController.getOneUser);

module.exports = router;