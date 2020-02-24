const k8s = require('./templates/k8s/index.js')
const config = require('./templates/config/index.js')

module.exports = function (plop) {
  plop.setGenerator('k8s', k8s)
  plop.setGenerator('config', config)
  plop.setGenerator('init', {
    description: 'Init APP Service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Your service name?'
      },
      {
        type: 'list',
        name: 'framework',
        message: 'Select your framework',
        default: 'sails',
        choices: () => [
          'sails',
          'adonis'
        ]
      },
      {
        type: 'list',
        name: 'db',
        message: 'Select your DB engine',
        default: 'none',
        choices: () => [
          'none',
          'psql',
          'mongodb'
        ]
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: process.cwd(),
        base: __dirname + '/app/{{framework}}',
        globOptions: {
          ignore: [
            '*DS_*'
          ],
          dot: true,
          absolute: true,
        },
        templateFiles: 'app/{{framework}}/**',
      }
    ]
  })
  // add some helpers
  plop.setHelper('ifeq', (a, b, options) => {if (a == b) { return options.fn(this)}})
  plop.setHelper('assign', function (varName, varValue, options) {
    if (!options.data.root) {
      options.data.root = {}
    }
    options.data.root[varName] = varValue
  })
  // plop.setPartial('env', '<h1>{{namespace}}</h1>');
}
