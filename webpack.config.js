const path = require('path');
// const nodeExternals = require('webpack-node-externals');
const webpack = require("webpack");
const JavaScriptObfuscator = require('webpack-obfuscator');
const TerserPlugin = require('terser-webpack-plugin');


const obfuscator = {
  lohp: {
    compact: true,
    controlFlowFlattening: false,
    deadCodeInjection: false,
    debugProtection: false,
    debugProtectionInterval: false,
    disableConsoleOutput: true,
    identifierNamesGenerator: 'hexadecimal',
    log: false,
    renameGlobals: false,
    rotateStringArray: true,
    selfDefending: true,
    stringArray: true,
    stringArrayEncoding: false,
    stringArrayThreshold: 0.75,
    unicodeEscapeSequence: false
  }
}

module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      })
    ]
  },
  mode: "production",
  target: "node",
  entry: './src/cli.js', // output: {
  //   path: path.resolve(__dirname, 'app'),
  //   filename: 'cli.js'
  // },

  output: {
    // filename: '[name].bundle.js',
    filename: 'cli.js'
    // publicPath: ''
  },
  node: {
    __dirname: false,
    __filename: false,
  },

  resolve: {
    alias: {
      handlebars: 'handlebars/dist/handlebars.min.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules\/)/,
        use: [
          {
            loader: 'shebang-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    // new JavaScriptObfuscator ({
    //   ...obfuscator.lohp
    //   // rotateUnicodeArray: true,
    //   // debugProtection: false,
    // }),

    // new webpack.BannerPlugin({
    //   banner: "#!/usr/bin/env node",
    //   raw: true
    //   // "hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]"
    // }),
    // {
    //   apply: (compiler) => {
    //     compiler.hooks.afterEmit.tap('afterCompile', (compilation) => {
    //       console.log('last');
    //
    //       compiler.apply(new webpack.BannerPlugin({
    //         banner: "#!/usr/bin/env node",
    //         raw: true
    //         // "hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]"
    //       }))
    //     });
    //   }
    // }

  ],

  externals: [
    // nodeExternals()
  ]
};
