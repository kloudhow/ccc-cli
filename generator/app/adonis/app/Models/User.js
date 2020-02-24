'use strict';

const Database = use('Database');
const { connection, Sequelize } = Database.getConnection();
const Model = Sequelize.Model;

class User extends Model {}

// Define attributes
User.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  user_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tenant_id: {
    type: Sequelize.INTEGER,
    // allowNull defaults to true
  }
}, {
  sequelize: connection,
  tableName: 'account',
  timestamps: false,
  // options
});

module.exports = User;
