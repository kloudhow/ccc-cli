'use strict';

class Base {
  constructor () {}

  /**
   * /get
   */
  async findAll () {
    return await this.model.findAll({
      raw: true
    });
  }

  /**
   * get /:id
   */
  async findOne (id) {
    return await this.model.findByPk(id, {
      raw: true
    });
  }

  /**
   * create
   */
  async add (entity) {
    const data = this.model.create(entity);

    return data.toJSON();
  }

  /**
   * update
   */
  async update (entity) {
    const data = await this.model.update(entity, {
      where: {
        _id: entity._id
      },
      raw: true,
      returning: true
    });

    return data[1][0];
  }

  /**
   * delete
   */
  async remove (id) {
    const data = await this.findOne(id);

    await this.model.destroy({
      where: {
        _id: id
      },
      raw: true
    });

    return data;
  }
}

module.exports = Base;
