import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import DeleteIcon from './components/DeleteIcon'

const ANVIL_URL = 'http://app.useanvil.com'

function AnvilSignatureModal ({ signURL, isOpen, onClose, onLoad, onFinish, width, height }) {
  useEffect(() => {
    if (isOpen) {
      function handleSignFinish ({ origin, data: url }) {
        if (origin !== ANVIL_URL) return
        onFinish(url)
      }
      window.addEventListener('message', handleSignFinish)
      return function cleanup () {
        window.removeEventListener('message', handleSignFinish)
      }
    }
  }, [isOpen])

  if (!isOpen) return null
  return (
    <>
      <div className={styles.modalContainer}>
        <DeleteIcon
          className={styles.deleteIcon}
          onClick={() => onClose()}
        />
        <iframe
          id={styles.signatureFrame}
          src={signURL}
          name="Anvil E-Signatures"
          title="Anvil E-Signatures"
          width={width}
          height={height}
          onLoad={onLoad}
        >
          <p className={styles.docs}>Your browser does not support iframes.</p>
        </iframe>
      </div>
      <div className={styles.modalBackdrop} />
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
  onClose: PropTypes.func.isRequired,
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
