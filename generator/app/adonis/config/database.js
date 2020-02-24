'use strict';

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env');

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with SQL databases.
  |
  */
  connection: Env.get('DB_CONNECTION', 'postgres'),

  postgres: {
    active: true,
    orm: 'sequelize',
    connection: {
      url: Env.get('DB_URL', 'postgresql://postgres:postgres@localhost:5432/gms'),
      options: {
        dialect: 'postgres',
      }
    }
  }
};
