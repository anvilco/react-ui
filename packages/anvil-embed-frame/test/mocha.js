const parentMochaConfig = require('../../../test/mocha')

module.exports = {
  ...parentMochaConfig,
  spec: './test/src/**/*.test.js',
}
