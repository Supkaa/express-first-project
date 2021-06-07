const express = require('express');
const User = require('../app/Model/User');
const router = express.Router();

router.get('/users/:id', async (request, response, next) => {
    try {
       const { id } = request.params;
        const user = await User.query().findById(id);
        response.json(user);
    } catch (error) {
        console.error(error);
        response.status(500).json(error);
    }
});

module.exports = router;