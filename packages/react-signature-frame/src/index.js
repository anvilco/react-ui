import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './index.css'

function AnvilSignatureFrame ({ signURL, scroll, onLoad, onFinish, AnvilURL, docsProps, ...otherProps }) {
  const iframeRef = useRef(null)

  useEffect(() => {
    function handleSignFinish ({ origin, data: url }) {
      if (AnvilURL !== origin) return
      onFinish(url)
    }
    window.addEventListener('message', handleSignFinish)
    if (scroll) iframeRef.current.scrollIntoView({ behavior: scroll })
    return () => window.removeEventListener('message', handleSignFinish)
  }, [])

  return (
    <iframe
      id="anvil-signature-frame"
      name="Anvil Etch E-Sign"
      title="Anvil Etch E-Sign"
      {...otherProps}
      src={signURL}
      onLoad={onLoad}
      ref={iframeRef}
    >
      <p className="anvil-docs" {...docsProps}>Your browser does not support iframes.</p>
    </iframe>
  )
}

AnvilSignatureFrame.defaultProps = {
  onFinish: (url) => {
    window.location.assign(url)
    console.log('RedirectURL:', url)
  },
  docsProps: {},
  AnvilURL: 'https://app.useanvil.com',
}

AnvilSignatureFrame.propTypes = {
  signURL: PropTypes.string.isRequired,
  scroll: PropTypes.string,
  onLoad: PropTypes.func,
  onFinish: PropTypes.func,
  docsProps: PropTypes.object,
  AnvilURL: PropTypes.string,
}

export default AnvilSignatureFrame
