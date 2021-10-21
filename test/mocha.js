'use strict'

module.exports = {
  diff: true,
  delay: false,
  extension: ['js'],
  package: './package.json',
  slow: 75,
  timeout: 2000,
  spec: './test/src/**/*.test.js',
  require: [
    '../../test/domSetup.js',
    // https://mochajs.org/#-require-module-r-module
    '@babel/register',
    '../../test/environment.js',
  ],
  'watch-files': [
    './test/**/*.test.js',
    './src/**/*.js',
  ],
  'watch-ignore': [],
  exit: true,
}
