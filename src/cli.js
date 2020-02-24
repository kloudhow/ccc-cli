#!/usr/bin/env node
const program = require('commander');
const generate = require('./generate.js');

const { version }  = require('../package.json');

// console.log('version', version);
program
  .version(version)
// .option('-C, --chdir <path>', 'change the working directory')
// .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
// .option('-T, --no-tests', 'ignore test hook')

program
  .command('init [name]')
  .description('Init APP Service')
  .option("-s, --setup_mode [mode]", "Which setup mode to use")
  .action(function(name, options) {
    generate({
      type: 'init',
      name,
    })
  });

program
  .command('config [name]')
  .description('Create new config')
  .action(function(name) {
    generate({
      type: 'config',
      name
    })
  });
program
  .command('k8s [name]')
  .description('Create k8s deployment')
  .action(function(name, cmd) {
    generate({
      type: 'k8s',
      name
    })
  });

program
  .command('*')
  .action(function(env) {
    program.outputHelp();
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

// program
//   .command('exec <cmd>')
//   .alias('ex')
//   .description('execute the given remote cmd')
//   .option("-e, --exec_mode <mode>", "Which exec mode to use")
//   .action(function(cmd, options){
//     console.log('exec "%s" using %s mode', cmd, options.exec_mode);
//   }).on('--help', function() {
//   console.log('  Examples:');
//   console.log();
//   console.log('    $ deploy exec sequential');
//   console.log('    $ deploy exec async');
//   console.log();
// });

