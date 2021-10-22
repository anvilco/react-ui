const sinon = require('sinon')
const chai = require('chai')
const sinonChai = require('sinon-chai')
const chaiAsPromised = require('chai-as-promised')
const chaiEnzyme = require('chai-enzyme')
const enzyme = require('enzyme')
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17')

enzyme.configure({ adapter: new Adapter() })

chai.use(sinonChai)
chai.use(chaiAsPromised)
chai.use(chaiEnzyme())

global.chai = chai
global.sinon = sinon
global.expect = chai.expect
global.should = chai.should()
global.mount = enzyme.mount
global.render = enzyme.render
global.shallow = enzyme.shallow
