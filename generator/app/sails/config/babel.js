/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

// @TODO: check throw error from babel
module.exports.babel = {
  compile: false,
  polyfill: false,
  presets: ['@babel/preset-env'],
  plugins: [
    // Stage 2
    // ["@babel/plugin-proposal-decorators", { legacy: true }],
    // "@babel/plugin-proposal-function-sent",
    // "@babel/plugin-proposal-export-namespace-from",
    // "@babel/plugin-proposal-numeric-separator",
    // '@babel/plugin-proposal-throw-expressions',

    // Stage 3
    // "@babel/plugin-syntax-dynamic-import",
    // "@babel/plugin-syntax-import-meta",
    // ["@babel/plugin-proposal-class-properties", { loose: false }],
    // "@babel/plugin-proposal-json-strings",
  ],

  /***************************************************************************
  *                                                                          *
  * Any other custom config this Sails app should use during development.    *
  *                                                                          *
  ***************************************************************************/
  // mailgunDomain: 'transactional-mail.example.com',
  // mailgunSecret: 'key-testkeyb183848139913858e8abd9a3',
  // stripeSecret: 'sk_test_Zzd814nldl91104qor5911gjald',
  // …

};
