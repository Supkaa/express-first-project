const knex = require('knex');
const database_config = require('../config/database');
const { Model } = require('objection');
const { app_env } = require('../config/env');

function setupDatabase() {
    switch (app_env) {
        case 'dev':
            var db = knex(database_config.development);
            break;
        case 'prod':
            var db = knex(database_config.production);
            break;
        default:
            break;
    }
    Model.knex(db);
}

module.exports = setupDatabase;