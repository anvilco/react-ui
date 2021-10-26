const { JSDOM } = require('jsdom')

const jsdom = new JSDOM(
  '<!doctype html><html><body></body></html>',
  // Without this `url` option, there will be the error:
  // "SecurityError: localStorage is not available for opaque origins"
  // This specifically comes from using the `rewire` package.
  // https://github.com/jsdom/jsdom/issues/2383#issuecomment-442199291
  { url: 'http://localhost' },
)
const { window } = jsdom

function copyProps (src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  })
}

global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js',
  platform: 'linux', // mac|windows|linux
  appName: 'A cool Anvil browser', // Arbitrary but must be defined
}
global.requestAnimationFrame = function (callback) {
  return setTimeout(callback, 0)
}
global.cancelAnimationFrame = function (id) {
  clearTimeout(id)
}
copyProps(window, global)
