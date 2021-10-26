import React from 'react'
import ReactSignatureFrame from '../../src/index'

describe('ReactSignatureFrame', function () {
  def('anvilURL', 'https://app.useanvil.com')
  def('handleLoad', () => sinon.spy())
  def('handleError', () => sinon.spy())
  def('handleFinish', () => sinon.spy())
  def('handleFinishSigning', () => sinon.spy())

  def('render', () => shallow(
    <ReactSignatureFrame
      signURL="http://localhost"
      anvilURL={$.anvilURL}
      onLoad={$.handleLoad}
      onError={$.handleError}
      onFinish={$.handleFinish}
      onFinishSigning={$.handleFinishSigning}
    />,
  ))

  it('renders', async function () {
    const wrapper = $.render
    expect(wrapper).to.exist
    expect(wrapper.find('iframe')).to.exist
  })

  describe('handleSignFinish', function () {
    it('does not call any callbacks when non-anvil url passed in', async function () {
      const origin = 'https://google.com'
      const data = {}
      const wrapper = $.render
      wrapper.instance().handleSignFinish({ origin, data })
      expect($.handleLoad).not.to.have.been.called
      expect($.handleError).not.to.have.been.called
      expect($.handleFinish).not.to.have.been.called
      expect($.handleFinishSigning).not.to.have.been.called
    })

    it('does not call any callbacks when non-string data is passed in', async function () {
      const origin = $.anvilURL
      const data = { action: 'signerComplete' }
      const wrapper = $.render
      wrapper.instance().handleSignFinish({ origin, data })
      expect($.handleLoad).not.to.have.been.called
      expect($.handleError).not.to.have.been.called
      expect($.handleFinish).not.to.have.been.called
      expect($.handleFinishSigning).not.to.have.been.called
    })

    it('calls onFinishSigning with an action when no action specified', async function () {
      const origin = $.anvilURL
      const data = `${$.anvilURL}/finish?token=a&signerEid=9fQnvfy51p7oKrEYajMh&signerStatus=completed&extra=ok`
      const wrapper = $.render
      wrapper.instance().handleSignFinish({ origin, data })
      expect($.handleError).not.to.have.been.called
      expect($.handleFinish).to.have.been.calledWith(data)
      expect($.handleFinishSigning).to.have.been.calledWith({
        action: 'signerComplete',
        signerEid: '9fQnvfy51p7oKrEYajMh',
        signerStatus: 'completed',
        extra: 'ok',
      })
    })

    it('calls onFinishSigning with the action specified', async function () {
      const origin = $.anvilURL
      const data = `${$.anvilURL}/finish?action=signerComplete&token=a&signerEid=9fQnvfy51p7oKrEYajMh`
      const wrapper = $.render
      wrapper.instance().handleSignFinish({ origin, data })
      expect($.handleError).not.to.have.been.called
      expect($.handleFinish).to.have.been.calledWith(data)
      expect($.handleFinishSigning).to.have.been.calledWith({
        action: 'signerComplete',
        signerEid: '9fQnvfy51p7oKrEYajMh',
      })
    })

    it('calls onFinishSigning with a custom action', async function () {
      const origin = $.anvilURL
      const data = `${$.anvilURL}/finish?action=signerCustom&token=a&signerEid=9fQnvfy51p7oKrEYajMh`
      const wrapper = $.render
      wrapper.instance().handleSignFinish({ origin, data })
      expect($.handleError).not.to.have.been.called
      expect($.handleFinish).to.have.been.calledWith(data)
      expect($.handleFinishSigning).to.have.been.calledWith({
        action: 'signerCustom',
        signerEid: '9fQnvfy51p7oKrEYajMh',
      })
    })

    it('calls onError when there are error params but no action', async function () {
      const origin = $.anvilURL
      const data = `${$.anvilURL}/finish?token=a&signerEid=9fQnvfy51p7oKrEYajMh&error=Token+Expired`
      const wrapper = $.render
      wrapper.instance().handleSignFinish({ origin, data })
      expect($.handleFinishSigning).not.to.have.been.called
      expect($.handleFinish).to.have.been.calledWith(data)
      expect($.handleError).to.have.been.calledWith({
        action: 'signerError',
        signerEid: '9fQnvfy51p7oKrEYajMh',
        error: 'Token Expired',
      })
    })

    it('calls onError when there is an error', async function () {
      const origin = $.anvilURL
      const data = `${$.anvilURL}/finish?action=signerError&token=a&signerEid=9fQnvfy51p7oKrEYajMh&errorType=tokenExpired`
      const wrapper = $.render
      wrapper.instance().handleSignFinish({ origin, data })
      expect($.handleFinishSigning).not.to.have.been.called
      expect($.handleFinish).to.have.been.calledWith(data)
      expect($.handleError).to.have.been.calledWith({
        action: 'signerError',
        signerEid: '9fQnvfy51p7oKrEYajMh',
        errorType: 'tokenExpired',
      })
    })
  })
})
