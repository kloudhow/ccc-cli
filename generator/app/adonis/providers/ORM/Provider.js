const { ServiceProvider } = require('@adonisjs/fold');

class ORMProvider extends ServiceProvider {
  register () {
    this.app.singleton('ORMProvider', () => {
      const Sequelize = this.app.use('Sequelize');

      return new (require('.'))({
        Sequelize,
      })
    })
  }
}

module.exports = ORMProvider;
