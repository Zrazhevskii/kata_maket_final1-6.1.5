/* eslint-env es6 */
/* eslint-disable no-console */

const { plugins } = require('./webpack.config');

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env'),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
};
