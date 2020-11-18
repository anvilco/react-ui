import React from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import AnvilSignatureFrame from '../../react-signature-frame/src/index.js'
import DeleteIcon from './components/DeleteIcon'
import './index.css'

function AnvilSignatureModal ({
  signURL, isOpen, onClose, onLoad, onFinish, AnvilURL, modalAppElement,
  showDeleteIcon, docsProps, AnvilFrameProps, deleteIconProps, ...otherProps
}) {
  ReactModal.setAppElement(modalAppElement)

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
        {...AnvilFrameProps}
        signURL={signURL}
        onLoad={onLoad}
        onFinish={onFinish}
        AnvilURL={AnvilURL}
        docsProps={docsProps}
      />
      {showDeleteIcon &&
        <DeleteIcon
          className="anvil-delete-icon"
          {...deleteIconProps}
          onClick={onClose}
        />}
    </ReactModal>
  )
}

AnvilSignatureModal.defaultProps = {
  isOpen: false,
  modalAppElement: '#root',
  showDeleteIcon: true,
  AnvilFrameProps: { id: 'anvil-signature-modal' },
  deleteIconProps: {},
}

AnvilSignatureModal.propTypes = {
  signURL: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onLoad: PropTypes.func,
  onFinish: PropTypes.func,
  modalAppElement: PropTypes.string,
  AnvilURL: PropTypes.string,
  showDeleteIcon: PropTypes.bool,
  docsProps: PropTypes.array,
  AnvilFrameProps: PropTypes.object,
  deleteIconProps: PropTypes.object,
}

export default AnvilSignatureModal
