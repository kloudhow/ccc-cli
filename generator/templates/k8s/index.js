const path = require('path');

module.exports = {
  description: 'New Deployment File',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'input deployment name'
    }
  ],
  actions: function(data) {
    const pathToContainer = path.join(process.cwd(), 'k8s');
    global.env = {}
    Object.keys(process.env)
          .filter((env) => {
            if (env.includes(`${data.name.toUpperCase()}_`)) return env
          })
          .forEach((env) => {
            const reg = new RegExp("^" + data.name.toUpperCase() + "_");
            let newEnv = env.replace(reg, "");
            if (newEnv) {
              global.env[newEnv] = process.env[env]
            }
          })
    // @TODO: update config
    data.GCPProject = process.env.GCP_PROJECT
    if(Object.keys(global.env).length > 0){
      data.env = global.env
    }
    const actions = [
      {
        type: 'add',
        path: path.join(pathToContainer, 'uat-{{dashCase name}}.yml'),
        templateFile: path.join(__dirname, 'deployment.yml.hbs'),
        force: true,
        data: {
          ...data,
          uat: true,
        },
        abortOnFail: true
      }, {
        type: 'add',
        path: path.join(pathToContainer, 'canary-{{dashCase name}}.yml'),
        templateFile: path.join(__dirname, 'deployment.yml.hbs'),
        force: true,
        data: {
          ...data,
          canary: true,
        },
        abortOnFail: true
      }, {
        type: 'add',
        path: path.join(pathToContainer, 'production-{{dashCase name}}.yml'),
        templateFile: path.join(__dirname, 'deployment.yml.hbs'),
        force: true,
        data: {
          ...data,
          production: true,
        },
        abortOnFail: true
      }
    ];

    return actions;
  }
};
