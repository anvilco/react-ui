import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import DeleteIcon from './components/DeleteIcon'

const ANVIL_URLS = ['https://app.useanvil.com', 'https://staging.useanvil.com']

function AnvilSignatureModal ({ signURL, isOpen, onClose, onLoad, onFinish, width, height }) {
  useEffect(() => {
    function handleSignFinish ({ origin, data: url }) {
      if (!ANVIL_URLS.includes(origin)) return
      onFinish(url)
    }
    if (isOpen) {
      window.addEventListener('message', handleSignFinish)
      return () => window.removeEventListener('message', handleSignFinish)
    }
  }, [isOpen])

  if (!isOpen) return null
  return (
    <>
      <div className="modalContainer">
        {onClose &&
          <DeleteIcon
            className="deleteIcon"
            onClick={() => onClose()}
          />}
        <iframe
          id="signatureFrame"
          src={signURL}
          name="Anvil E-Signatures"
          title="Anvil E-Signatures"
          width={width}
          height={height}
          onLoad={onLoad}
        >
          <p className="docs">Your browser does not support iframes.</p>
        </iframe>
      </div>
      <div className="modalBackdrop" />
    </>
  )
}

AnvilSignatureModal.defaultProps = {
  isOpen: false,
  onFinish: (url) => window.location.assign(url),
  width: 900,
  height: 1100,
}

AnvilSignatureModal.propTypes = {
  signURL: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
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

export default AnvilSignatureModal
