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
    if (this.props.anvilURL !== origin) return
    if (typeof data === 'string') {
      this.props.onFinish(data)

      // parse query params into an object
      const searchStr = data.split('?')[1]
      let payload, searchObj
      let hasError = false
      if (typeof URLSearchParams !== 'undefined') {
        searchObj = new URLSearchParams(searchStr)
        hasError = searchObj.get('error') || searchObj.get('errorType')
        payload = {
          action: 'signerComplete',
          signerStatus: searchObj.get('signerStatus'),
          signerEid: searchObj.get('signerEid'),
          nextSignerEid: searchObj.get('nextSignerEid'),
          documentGroupStatus: searchObj.get('documentGroupStatus'),
          documentGroupEid: searchObj.get('documentGroupEid'),
          etchPacketEid: searchObj.get('etchPacketEid'),
          weldDataEid: searchObj.get('weldDataEid'),
        }
      } else {
        searchObj = JSON.parse('{"' + decodeURI(searchStr).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
        hasError = searchObj.error || searchObj.errorType
        payload = {
          action: 'signerComplete',
          signerStatus: searchObj.signerStatus ?? null,
          signerEid: searchObj.signerEid ?? null,
          nextSignerEid: searchObj.nextSignerEid ?? null,
          documentGroupStatus: searchObj.documentGroupStatus ?? null,
          documentGroupEid: searchObj.documentGroupEid ?? null,
          etchPacketEid: searchObj.etchPacketEid ?? null,
          weldDataEid: searchObj.weldDataEid ?? null,
        }
      }

      if (!hasError) this.props.onFinishSigning(payload)
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

AnvilSignatureFrame.defaultProps = {
  onFinish: () => {},
  onFinishSigning: () => {},
  anvilURL: 'https://app.useanvil.com',
  enableDefaultStyles: true,
}

AnvilSignatureFrame.propTypes = {
  signURL: PropTypes.string,
  scroll: PropTypes.string,
  onLoad: PropTypes.func,
  onFinish: PropTypes.func,
  onFinishSigning: PropTypes.func,
  anvilURL: PropTypes.string,
  enableDefaultStyles: PropTypes.bool,
}

export default AnvilSignatureFrame
