import React from 'react'
import PropTypes from 'prop-types'

import { omit, parseURLParams } from './helpers'

const IGNORED_KEYS = ['token']

class AnvilSignatureFrame extends React.Component {
  constructor (props) {
    super(props)
    this.iframeRef = React.createRef()
  }

  componentDidMount () {
    const { scroll } = this.props
    window.addEventListener('message', this.handleSignFinish)
    if (scroll) this.iframeRef.current.scrollIntoView({ behavior: scroll })
  }

  componentWillUnmount () {
    window.removeEventListener('message', this.handleSignFinish)
  }

  handleSignFinish = ({ origin, data }) => {
    const { anvilURL, onFinish, onFinishSigning, onError } = this.props
    if (anvilURL !== origin) return
    if (typeof data === 'string') {
      if (onFinish) {
        onFinish(data)
      }

      const searchStr = data.split('?')[1]
      const payload = omit(parseURLParams(searchStr), IGNORED_KEYS)
      const hasError = payload.action === 'signerError' || payload.error || payload.errorType
      if (!payload.action) {
        payload.action = hasError ? 'signerError' : 'signerComplete'
      }
      if (hasError) {
        onError(payload)
      } else {
        onFinishSigning(payload)
      }
    }
  }

  render () {
    const {
      signURL, onLoad, enableDefaultStyles,
      anvilURL, onError, onFinish, onFinishSigning, // ignore these props here.
      ...otherProps
    } = this.props
    const { iframeWarningProps, ...anvilFrameProps } = otherProps
    return (
      <iframe
        id="anvil-signature-frame"
        name="Anvil Etch E-Sign"
        title="Anvil Etch E-Sign"
        style={enableDefaultStyles
          ? {
              width: '80vw',
              height: '85vh',
              maxWidth: '1200px',
              borderStyle: 'groove',
            }
          : undefined}
        {...anvilFrameProps}
        src={signURL + '&withinIframe=true'}
        onLoad={onLoad}
        ref={this.iframeRef}
      >
        <p className="anvil-iframe-warning" {...iframeWarningProps}>Your browser does not support iframes.</p>
      </iframe>
    )
  }
}

AnvilSignatureFrame.defaultProps = {
  onFinish: () => {},
  onFinishSigning: () => {},
  onError: () => {},
  anvilURL: 'https://app.useanvil.com',
  enableDefaultStyles: true,
}

AnvilSignatureFrame.propTypes = {
  signURL: PropTypes.string,
  scroll: PropTypes.string,
  onLoad: PropTypes.func,
  onError: PropTypes.func.isRequired,
  onFinishSigning: PropTypes.func.isRequired,
  anvilURL: PropTypes.string,
  enableDefaultStyles: PropTypes.bool,

  // DEPRECATED: use onFinishSigning or onError instead
  onFinish: PropTypes.func,
}

export default AnvilSignatureFrame
