const { ServiceProvider } = require('@adonisjs/fold');

class DatabaseConnections extends ServiceProvider {
  register () {
    this.app.singleton('Database', () => {
      const Config = this.app.use('Config');
      const ORMProvider = this.app.use('ORMProvider');

      return new (require('.'))({
        Config,
        ORMProvider,
      })
    })
  }
}

module.exports = DatabaseConnections;
