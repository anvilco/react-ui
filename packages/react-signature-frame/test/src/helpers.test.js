import { omit, parseURLParams } from '../../src/helpers'

describe('parseURLParams', function () {
  const params = [
    'noparam=',
    'hello="hello"',
    'num=3',
    'stringPlus=test+me',
    'stringEncode=test%20me',
    'jsonThingsEncoded=json%3A%3D%7B%7D',
    'jsonThingsDecoded=json}:{{',
    'action=signerComplete',
    'documentGroupEid=9fQnvfy51p7oKrEYajMh',
    'documentGroupStatus=partial',
    'etchPacketEid=J1phQTO6WQH6gZcMJAG5',
    'nextSignerEid=HRLhx4khticpfxsUFSpj',
    'signerEid=kJzR6mcIWKoZs6KOxV4w',
    'signerStatus=completed',
  ]
  const paramString = params.join('&')
  const result = {
    hello: '"hello"',
    jsonThingsEncoded: 'json:={}',
    jsonThingsDecoded: 'json}:{{',
    noparam: '',
    num: '3',
    stringEncode: 'test me',
    stringPlus: 'test me',
    action: 'signerComplete',
    documentGroupEid: '9fQnvfy51p7oKrEYajMh',
    documentGroupStatus: 'partial',
    etchPacketEid: 'J1phQTO6WQH6gZcMJAG5',
    nextSignerEid: 'HRLhx4khticpfxsUFSpj',
    signerEid: 'kJzR6mcIWKoZs6KOxV4w',
    signerStatus: 'completed',
  }

  it('URLSearchParams is available', async function () {
    expect(typeof URLSearchParams).to.equal('function')
  })

  describe('when URLSearchParams is used to parse', function () {
    it('returns the an empty object when bad data passed in', async function () {
      expect(parseURLParams(undefined)).to.eql({})
      expect(parseURLParams(null)).to.eql({})
      expect(parseURLParams([])).to.eql({})
      expect(parseURLParams('')).to.eql({})
      expect(parseURLParams(' ')).to.eql({})
      expect(parseURLParams('nope')).to.eql({ nope: '' })
      expect(parseURLParams(' this  is nonsense')).to.eql({ 'this  is nonsense': '' })
      expect(parseURLParams(' notAnError== ')).to.eql({ notAnError: '=' })
    })

    it('returns the result', async function () {
      expect(parseURLParams(paramString)).to.eql(result)
    })
  })

  describe('when forceManualParse is true', function () {
    const options = { forceManualParse: true }
    it('returns the result', async function () {
      expect(parseURLParams(paramString, options)).to.eql(result)
    })

    it('returns the an empty object when bad data passed in', async function () {
      expect(parseURLParams(undefined, options)).to.eql({})
      expect(parseURLParams(null, options)).to.eql({})
      expect(parseURLParams([], options)).to.eql({})
      expect(parseURLParams('', options)).to.eql({})
      expect(parseURLParams(' ', options)).to.eql({})
      expect(parseURLParams('nope', options)).to.eql({ nope: '' })
      expect(parseURLParams(' this  is nonsense', options)).to.eql({ 'this  is nonsense': '' })
    })

    it('gracefully handles parse error', async function () {
      expect(parseURLParams(' parseError== ', options)).to.eql({})
    })
  })
})

describe('omit', function () {
  it('returns an empty object with garbage data', async function () {
    expect(omit()).to.eql({})
    expect(omit(undefined, [])).to.eql({})
    expect(omit(null, [])).to.eql({})
    expect(omit({}, [])).to.eql({})
  })

  it('returns an object minus the keys passed', async function () {
    const original = { a: 1, b: 2 }
    expect(omit(original)).to.eql(original)
    expect(omit(original)).not.to.equal(original)
    expect(omit(original, [])).to.eql(original)
    expect(omit(original, ['b'])).to.eql({ a: 1 })
  })
})
