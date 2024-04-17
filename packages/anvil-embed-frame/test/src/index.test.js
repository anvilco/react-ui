import React from 'react'
import AnvilEmbedFrame from '../../src/index'

describe('AnvilEmbedFrame', function () {
  def('handleEvent', () => sinon.spy())
  def('anvilURL', 'https://app.useanvil.com')

  def('render', () => shallow(
    <AnvilEmbedFrame
      iframeURL="http://localhost"
      onEvent={$.handleEvent}
      anvilURL={$.anvilURL}
    />,
  ))

  it('renders', async function () {
    const wrapper = $.render
    expect(wrapper).to.exist
    expect(wrapper.find('iframe')).to.exist
  })

  describe('onEvent', function () {
    it('does not call onEvent when non-anvil url passed in', async function () {
      const origin = 'https://chess.com'
      const data = { action: 'forgeComplete' }
      const wrapper = $.render
      wrapper.instance().handleEvent({ origin, data })
      expect($.handleEvent).to.not.have.been.called
    })

    it('does not call onEvent when non-object data passed in', async function () {
      const origin = $.anvilURL
      const data = 'signerComplete'
      const wrapper = $.render
      wrapper.instance().handleEvent({ origin, data })
      expect($.handleEvent).to.not.have.been.called
    })

    it('calls onEvent successfully', async function () {
      const origin = $.anvilURL
      const data = { action: 'castEdit' }
      const wrapper = $.render
      wrapper.instance().handleEvent({ origin, data })
      expect($.handleEvent).to.have.been.calledWith(data)
    })
  })

  it('calls postMessage successfully', () => {
    const wrapper = $.render
    const iframe = wrapper.find('iframe')
    const postMessage = sinon.spy()
    const iframeMock = {
      contentWindow: {
        postMessage,
      },
    }

    iframe.getElement().ref.current = iframeMock

    wrapper.instance().postMessage({ action: 'test' })
    expect(postMessage.called).to.be.equal(true)
  })
})
