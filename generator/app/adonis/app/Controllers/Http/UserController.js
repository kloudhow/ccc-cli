'use strict';
const UserRepository = use('App/Repositories/User');

class UserController {
  constructor () {
    this.repository = new UserRepository();
  }
  async index ({ request, auth }) {
    return await this.repository.findOne(1);
  }
}

module.exports = UserController;
