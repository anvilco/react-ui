import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const AnvilEmbedFrame = ( props ) => {
const {
  iframeURL,
  onEvent = () => {},
  anvilURL = 'https://app.useanvil.com',
  scroll,
  style,
  iframeRef,
  ...others
} = props
const ref = iframeRef || useRef(null)

  useEffect(() => {
    const handleEvent = ({ origin, data }) => {
      if (anvilURL !== origin) return
      if (typeof data === 'object') {
        onEvent(data)
      }
    }

    if (scroll) ref.current?.scrollIntoView({ behavior: scroll })
    window.addEventListener('message', handleEvent)

    return () => {
      window.removeEventListener('message', handleEvent)
    }
  }, [ anvilURL, onEvent, ref, scroll])

  return (
    <iframe
      id="anvil-embed-frame"
      name="AnvilEmbedFrame"
      {...others} // props above may be overridden
      src={iframeURL}
      ref={ref}
      style={style}
    >
      <p id="anvil-iframe-warning">Your browser does not support iframes.</p>
    </iframe>
  )
}

AnvilEmbedFrame.propTypes = {
  iframeURL: PropTypes.string.isRequired,
  iframeRef: PropTypes.object,
  onLoad: PropTypes.func,
  onEvent: PropTypes.func,
  anvilURL: PropTypes.string,
  style: PropTypes.object,
  scroll: PropTypes.oneOf(['auto', 'smooth']),
}

export default AnvilEmbedFrame
