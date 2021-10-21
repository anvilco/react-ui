import React from 'react'
import PropTypes from 'prop-types'

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

      // parse query params into an object
      const searchStr = data.split('?')[1]
      const payload = {}
      if (typeof URLSearchParams !== 'undefined') {
        const searchObj = new URLSearchParams(searchStr)
        for (const paramEntry of searchObj.entries()) {
          const [key, value] = paramEntry
          if (!IGNORED_KEYS[key]) {
            payload[key] = value
          }
        }
      } else {
        const searchObj = JSON.parse('{"' + decodeURI(searchStr).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
        for (const paramKey in searchObj) {
          if (!IGNORED_KEYS[paramKey]) {
            payload[paramKey] = searchObj[paramKey]
          }
        }
      }

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
    const { signURL, onLoad, enableDefaultStyles, ...otherProps } = this.props
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

const IGNORED_KEYS = {
  token: true,
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
