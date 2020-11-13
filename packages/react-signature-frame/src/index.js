import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'

const ANVIL_URL = 'http://app.useanvil.com'

function AnvilSignatureFrame ({ signURL, scroll, onLoad, onFinish, width, height }) {
  const iframeRef = useRef(null)

  useEffect(() => {
    function handleSignFinish ({ origin, data: url }) {
      if (origin !== ANVIL_URL) return
      onFinish(url)
    }
    window.addEventListener('message', handleSignFinish)
    if (scroll) iframeRef.current.scrollIntoView({ behavior: scroll })
    return function cleanup () {
      window.removeEventListener('message', handleSignFinish)
    }
  }, [])

  return (
    <iframe
      id={styles.signatureFrame}
      src={signURL}
      name="Anvil E-Signatures"
      title="Anvil E-Signatures"
      width={width}
      height={height}
      onLoad={onLoad}
      ref={iframeRef}
    >
      <p className={styles.docs}>Your browser does not support iframes.</p>
    </iframe>
  )
}

AnvilSignatureFrame.defaultProps = {
  onFinish: (url) => window.location.assign(url),
  width: 900,
  height: 1100,
}

AnvilSignatureFrame.propTypes = {
  signURL: PropTypes.string.isRequired,
  scroll: PropTypes.string,
  onLoad: PropTypes.func,
  onFinish: PropTypes.func,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

export default AnvilSignatureFrame
