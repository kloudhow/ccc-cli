'use strict';

class Database {
  constructor ({ Sequelize }) {
    this.orms = {
      'sequelize': Sequelize,
    };
  }

  get (name) {
    return this.orms[name];
  }
}

module.exports = Database;
