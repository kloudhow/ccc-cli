const path = require('path');

module.exports = {
  description: 'New Config File',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'input config file name'
    }
  ],
  actions: function(data) {
    const pathToContainer = path.join(process.cwd(), 'config');

    const actions = [
      {
        type: 'add',
        path: path.join(pathToContainer, '{{camelCase name}}.js'),
        templateFile: path.join(__dirname, 'config.js.hbs'),
        abortOnFail: true
      }
    ];

    return actions;
  }
};
