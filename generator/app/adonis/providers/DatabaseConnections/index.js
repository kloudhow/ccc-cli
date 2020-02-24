'use strict';

class Database {
  constructor ({ Config, ORMProvider }) {
    this.Config = Config;
    this.ORMProvider = ORMProvider;
    this.default = Config.get('database.connection');
    this.connections = {};
  }

  getConnection (connectionName = this.default) {
    if (!this.connections[connectionName]) {
      this.connections[connectionName] = this.initConnection(connectionName);
    }

    return this.connections[connectionName];
  }

  initConnection (name) {
    const config = this.Config.get(`database.${name}`);

    if (!config) {
      throw 'Connection not found!';
    }

    if (config.active === false) {
      throw 'Connection is inactive!';
    }

    const orm = this.ORMProvider.get(config.orm);

    if (!orm) {
      throw 'Do not support this kind of ORM yet!'
    }

    return new orm({ config: config.connection });
  }
}

module.exports = Database;
