import React from 'react'
import AnvilEmbedFrame from '../../src/index'
import { expect } from 'chai' // Assuming you're using Chai for assertions

describe('AnvilEmbedFrame', function () {
  let handleEvent
  const anvilURL = 'https://app.useanvil.com'
  const event = new window.Event('message', { bubbles: true })

  beforeEach(() => {
    handleEvent = sinon.spy()
  })

  it('renders', function () {
    const wrapper = shallow(
      <AnvilEmbedFrame
        iframeURL="http://localhost"
        onEvent={handleEvent}
        anvilURL={anvilURL}
      />
    )
    expect(wrapper.exists()).to.be.true
    expect(wrapper.find('iframe').exists()).to.be.true
  })

  describe('handleEvent', function () {
    it('does not call onEvent when non-anvil url passed in', function () {
      const origin = 'https://chess.com'
      const data = { action: 'forgeComplete' }
      mount(
        <AnvilEmbedFrame
          iframeURL="http://localhost"
          onEvent={handleEvent}
          anvilURL={anvilURL}
        />
      )
      event.data = data
      event.origin = origin
      window.dispatchEvent(event)
      expect(handleEvent.called).to.be.false
    })

    it('does not call onEvent when non-object data passed in', function () {
      const origin = anvilURL
      const data = 'signerComplete'
      mount(
        <AnvilEmbedFrame
          iframeURL="http://localhost"
          onEvent={handleEvent}
          anvilURL={anvilURL}
        />
      )
      event.data = data
      event.origin = origin
      window.dispatchEvent(event)
      expect(handleEvent.called).to.be.false
    })

    it('calls onEvent successfully', function () {
      const origin = anvilURL
      const data = { action: 'castEdit' }
      mount(
        <AnvilEmbedFrame
          iframeURL="http://localhost"
          onEvent={handleEvent}
          anvilURL={anvilURL}
        />
      )
      event.data = data
      event.origin = origin
      window.dispatchEvent(event)
      expect(handleEvent.calledWith(data)).to.be.true
    })
  })
})
