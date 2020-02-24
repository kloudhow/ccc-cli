'use strict';

const sequelize = require('sequelize');

class Sequelize {
  constructor ({ config }) {
    this.config = config;
    this.Sequelize = sequelize;
    this.connection = null;

    this.initConnection();
  }

  initConnection () {
    if (this.config.url) {
      this.connection = new sequelize(this.config.url, this.config.options);
      return;
    }

    this.connection = new sequelize(
      this.config.database,
      this.config.user,
      this.config.password,
      this.config.options,
    );
  }
}

module.exports = Sequelize;
