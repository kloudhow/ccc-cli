'use strict';

const BaseRepository = use('BaseRepository');
const UserModel = use('App/Models/User');

class UserRepository extends BaseRepository {
  constructor() {
    super();
    this.model = UserModel;
  }
}

module.exports = UserRepository;
