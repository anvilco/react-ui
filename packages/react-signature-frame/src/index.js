import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './index.css'

const ANVIL_URLS = ['https://app.useanvil.com', 'https://staging.useanvil.com']

function AnvilSignatureFrame ({ signURL, scroll, onLoad, onFinish }) {
  const iframeRef = useRef(null)

  useEffect(() => {
    function handleSignFinish ({ origin, data: url }) {
      if (!ANVIL_URLS.includes(origin)) return
      onFinish(url)
    }
    window.addEventListener('message', handleSignFinish)
    if (scroll) iframeRef.current.scrollIntoView({ behavior: scroll })
    return () => window.removeEventListener('message', handleSignFinish)
  }, [])

  return (
    <iframe
      id="anvil-signatureFrame"
      src={signURL}
      name="Anvil Etch E-Sign"
      title="Anvil Etch E-Sign"
      onLoad={onLoad}
      ref={iframeRef}
    >
      <p className="anvil-docs">Your browser does not support iframes.</p>
    </iframe>
  )
}

AnvilSignatureFrame.defaultProps = {
  onFinish: (url) => window.location.assign(url),
}

AnvilSignatureFrame.propTypes = {
  signURL: PropTypes.string.isRequired,
  scroll: PropTypes.string,
  onLoad: PropTypes.func,
  onFinish: PropTypes.func,
}

export default AnvilSignatureFrame
