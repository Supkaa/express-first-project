const setupDatabase = require('./database/setup');
const express = require('express');
const { app_port } = require('./config/env');
const router = require('./routes/web');

setupDatabase();

const app = express();
app.use(express.json());
app.use('/', router);

app.listen(app_port, () => console.log(`SERVER RUNNING ON PORT ${app_port}`));