const setupDatabase = require('./database/setup');
const express = require('express');
const { app_port } = require('./config/env');
const User = require('./app/Model/User');

setupDatabase();

const app = express();
app.use(express.json());

app.get('/users/:id', async (request, response, next) => {
    try {
       const { id } = request.params;
        const user = await User.query().findById(id);
        response.json(user);
    } catch (error) {
        console.error(error);
        response.status(500).json(error);
    }
});

app.listen(app_port, () => console.log(`SERVER RUNNING ON PORT ${app_port}`));