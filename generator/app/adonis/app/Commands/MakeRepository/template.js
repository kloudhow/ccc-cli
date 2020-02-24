'use strict';

const BaseRepository = use('BaseRepository');
const {{name}}Model = use('App/Models/{{name}}');

class {{name}}Repository extends BaseRepository {
  constructor() {
    super();
    this.model = {{name}}Model;
  }
}

module.exports = {{name}}Repository;
