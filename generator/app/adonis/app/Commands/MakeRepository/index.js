'use strict';
const path = require('path');
const { Command } = require('@adonisjs/ace');

const dir = path.resolve(__dirname, '..', '..', 'Repositories');

class Index extends Command {
  static get signature () {
    return 'make:repository { name: Name of the repository }';
  }

  static get description () {
    return 'Make a new repository';
  }

  async handle (args, options) {
    try {
      const name = args.name;

      await this.ensureFileNotExisted(name);
      await this.ensureDirExisted();

      const file = path.resolve(dir, `${name}.js`);
      const template = await this.readFile(path.resolve(__dirname, 'template.js'), 'utf-8');
      const content = template.replace(/{{name}}/g, name);

      await this.writeFile(file, content);
      this.info(`${this.icon('success')} Repository ${name} created!`);
    } catch (e) {
      this.error(`${this.icon('error')} ${e.message}`);
    }
  }

  async ensureFileNotExisted (name) {
    const file = path.resolve(dir, `${name}.js`);
    const existed = await this.pathExists(file);

    if (existed) {
      throw new Error(`Repository ${name} existed!`)
    }
  }

  async ensureDirExisted () {
    await this.ensureDir(dir);
  }
}

module.exports = Index;
