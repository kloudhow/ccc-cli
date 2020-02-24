const path = require('path')
const {spawn} = require('child_process')

// const generatorIndex = require('../generator')

// require('../generator');

let dirname = __dirname;

// if(process.env.NODE_ENV === 'dev' || process.env.ENV === 'dev')
// dirname = __dirname.replace('/dist','');
console.log('__dirname', __dirname);

const plop = path.join(dirname, '../node_modules/.bin/plop')



// const generator = path.join(dirname, '../dist/generator.js')
const generator = path.join(dirname, '../generator/index.js')


console.log('generator', generator);
// console.log('generatorIndex', generatorIndex);

// @TODO: check development & production

// var tmp = require('tmp');
//
// var tmpobj = tmp.dirSync({xdir: '.one-cli' });
// console.log('Dir: ', tmpobj.name);
// // Manual cleanup
// // tmpobj.removeCallback();
//
//
// var tmpobj = tmp.fileSync({ mode: 0644, prefix: 'prefix-', postfix: '.txt', xdir: '.one-cli' });
// console.log('File: ', tmpobj.name);
// console.log('Filedescriptor: ', tmpobj.fd);


// /var/folders/z1/_1wrpfmd08s_w6fqqfry_zy40000gn/T/prefix-21624DXb3POO8GjMz.txt

// tmp.setGracefulCleanup();


module.exports = function ({type, name, options}) {


  const args = ['--plopfile', generator, type]

  if (name) {
    args.push(name)
  }

  const runPlop = spawn(plop, args, {
    cwd: process.cwd(),
    stdio: 'inherit'
  })

  runPlop.on('exit', function () {
    // TODO: should call yarn install or update
    process.exit(1)
  })
}
