import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import DeleteIcon from './components/DeleteIcon'
import './index.css'

ReactModal.setAppElement('#root')

const ANVIL_URLS = ['https://app.useanvil.com', 'https://staging.useanvil.com']

function AnvilSignatureModal ({ signURL, isOpen, onClose, onLoad, onFinish }) {
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

  return (
    <ReactModal
      isOpen={isOpen}
      ariaHideApp
      shouldFocusAfterRender
      shouldCloseOnEsc
      shouldReturnFocusAfterClose
      role="e-sign"
      contentLabel="Anvil Signature Modal"
      className="anvil-modal"
      overlayClassName="anvil-overlay"
      portalClassName="anvil-modalPortal"
      bodyOpenClassName="anvil-signaturePageBody"
      htmlOpenClassName="anvil-signaturePageHTML"
    >
      <iframe
        id="anvil-signatureModal"
        src={signURL}
        name="Anvil E-Signatures"
        title="Anvil E-Signatures"
        onLoad={onLoad}
      >
        <p className="anvil-docs">Your browser does not support iframes.</p>
      </iframe>
      {onClose &&
        <DeleteIcon
          className="anvil-deleteIcon"
          onClick={() => onClose()}
        />}
    </ReactModal>
  )
}

AnvilSignatureModal.defaultProps = {
  isOpen: false,
  onFinish: (url) => window.location.assign(url),
}

AnvilSignatureModal.propTypes = {
  signURL: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onLoad: PropTypes.func,
  onFinish: PropTypes.func,
}

export default AnvilSignatureModal
