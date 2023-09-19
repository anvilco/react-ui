import React from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'

import AnvilEmbedFrame from '../../anvil-embed-frame/src/index.js'
import IconClose from './components/IconClose.js'
import './styles.css'

/**
 * @typedef Props
 * @prop {String} signURL
 * @prop {boolean} isOpen
 * @prop {Function} onClose
 * @prop {Function} onLoad
 * @prop {Function} onEvent
 * @prop {String|Element} modalAppElement
 * @prop {String} anvilURL
 * @prop {boolean} showIconClose
 * @prop {Object} anvilFrameProps
 * @prop {Object} iconCloseProps
 */

/**
 * @extends React.Component<Props>
 */
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
      onEvent,
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
        <AnvilEmbedFrame
          {...anvilFrameProps}
          signURL={signURL}
          onLoad={onLoad}
          onEvent={onEvent}
          anvilURL={anvilURL}
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
  onEvent: PropTypes.func,
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
