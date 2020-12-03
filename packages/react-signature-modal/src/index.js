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
      signURL, isOpen, onClose, onLoad, onFinish, anvilURL, showIconClose,
      anvilFrameProps, iconCloseProps, enableDefaultStyles, ...otherProps
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
        portalClassName="anvil-modal-portal"
        bodyOpenClassName="anvil-signature-page-body"
        htmlOpenClassName="anvil-signature-page-html"
        style={enableDefaultStyles
          ? {
              content: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                transform: 'translate(-50%, -50%)',
                background: '#fbfbfb',
                border: 'none',
                outline: 'none',
                padding: '0px',
              },
              overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.3)',
              },
            }
          : undefined}
        {...otherProps}
        isOpen={isOpen}
        onRequestClose={onClose}
      >
        <AnvilSignatureFrame
          {...anvilFrameProps}
          enableDefaultStyles={false}
          signURL={signURL}
          onLoad={onLoad}
          onFinish={onFinish}
          anvilURL={anvilURL}
        />
        {showIconClose &&
          <IconClose
            className="anvil-delete-icon"
            style={enableDefaultStyles
              ? {
                  cursor: 'pointer',
                  position: 'fixed',
                  top: '10px',
                  right: '10px',
                }
              : undefined}
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
  enableDefaultStyles: true,
  anvilFrameProps: { id: 'anvil-signature-modal' },
  iconCloseProps: {},
}

AnvilSignatureModal.propTypes = {
  signURL: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onLoad: PropTypes.func,
  onFinish: PropTypes.func,
  modalAppElement: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Element),
  ]),
  anvilURL: PropTypes.string,
  showIconClose: PropTypes.bool,
  enableDefaultStyles: PropTypes.bool,
  anvilFrameProps: PropTypes.object,
  iconCloseProps: PropTypes.object,
}

export default AnvilSignatureModal
