import React from 'react'
import AnvilEmbedFrame from '../../src/index'

describe('AnvilEmbedFrame', function () {
  def('handleEvent', () => sinon.spy())
  def('anvilURL', 'https://app.useanvil.com')
  def('enableDefaultStyles', true)

  def('render', () => shallow(
    <AnvilEmbedFrame
      iframeURL="http://localhost"
      onEvent={$.handleEvent}
      anvilURL={$.anvilURL}
      enableDefaultStyles={$.enableDefaultStyles}
    />,
  ))

  it('renders', async function () {
    const wrapper = $.render
    expect(wrapper).to.exist
    expect(wrapper.find('iframe')).to.exist
  })
})
