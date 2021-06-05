// Update with your config settings.
const { knexSnakeCaseMappers } = require('objection');
const {
  first_db_connection,
  first_db_host,
  first_db_port,
  first_db_name,
  first_db_username,
  first_db_password,
  second_db_connection,
  second_db_host,
  second_db_port,
  second_db_name,
  second_db_username,
  second_db_password,
} = require('./env');

module.exports = {

  development: {
    client: first_db_connection,
    connection: {
      host : first_db_host,
      port : first_db_port,
      database: first_db_name,
      user:     first_db_username,
      password: first_db_password,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: '../database/migrations',
    },
    seeds: {
      directory: '../database/seeds',
    },
    ...knexSnakeCaseMappers,
  },

  production: {
    client: second_db_connection,
    connection: {
      host: second_db_host,
      port: second_db_port,
      database: second_db_name,
      user: second_db_username,
      password: second_db_password,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: '../database/migrations'
    },
    seeds: {
      directory: '../database/seeds'
    },
    ...knexSnakeCaseMappers,
  }
};
