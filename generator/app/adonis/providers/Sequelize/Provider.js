const { ServiceProvider } = require('@adonisjs/fold');

class SequelizeProvider extends ServiceProvider {
  register () {
    this.app.bind('Sequelize', () => {
      return require('.');
    });
  }
}

module.exports = SequelizeProvider;
