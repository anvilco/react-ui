import React from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'

import AnvilSignatureFrame from '../../react-signature-frame/src/index.js'
import IconClose from './components/IconClose.js'
import './styles.css'

class AnvilSignatureModal extends React.Component {
  constructor (props) {
    super(props)
    ReactModal.setAppElement(this.props.modalAppElement)
  }

  render () {
    const {
      signURL,
      isOpen,
      onClose,
      onLoad,
      onError,
      onFinish,
      onFinishSigning,
      anvilURL,
      showIconClose,
      anvilFrameProps,
      iconCloseProps,
      ...otherProps
    } = this.props

    return (
      <ReactModal
        ariaHideApp
        shouldFocusAfterRender
        shouldCloseOnEsc
        shouldReturnFocusAfterClose
        shouldCloseOnOverlayClick
        role="e-sign"
        contentLabel="Anvil Signature Modal"
        className="anvil-modal"
        overlayClassName="anvil-overlay"
        portalClassName="anvil-modal-portal"
        bodyOpenClassName="anvil-signature-page-body"
        htmlOpenClassName="anvil-signature-page-html"
        {...otherProps}
        isOpen={isOpen}
        onRequestClose={onClose}
      >
        <AnvilSignatureFrame
          {...anvilFrameProps}
          signURL={signURL}
          onLoad={onLoad}
          onError={onError}
          onFinish={onFinish}
          onFinishSigning={onFinishSigning}
          anvilURL={anvilURL}
          enableDefaultStyles={false}
        />
        {showIconClose &&
          <IconClose
            className="anvil-delete-icon"
            {...iconCloseProps}
            onClick={onClose}
          />}
      </ReactModal>
    )
  }
}

AnvilSignatureModal.defaultProps = {
  isOpen: false,
  modalAppElement: document.body,
  showIconClose: true,
  anvilFrameProps: { id: 'anvil-signature-modal' },
  iconCloseProps: {},
}

AnvilSignatureModal.propTypes = {
  signURL: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  onFinish: PropTypes.func,
  onFinishSigning: PropTypes.func,
  modalAppElement: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Element),
  ]),
  anvilURL: PropTypes.string,
  showIconClose: PropTypes.bool,
  anvilFrameProps: PropTypes.object,
  iconCloseProps: PropTypes.object,
}

export default AnvilSignatureModal
