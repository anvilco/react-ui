import React from 'react'
import PropTypes from 'prop-types'

class AnvilEmbedFrame extends React.Component {
  constructor (props) {
    super(props)
    this.iframeRef = React.createRef()
  }

  componentDidMount () {
    const { scroll } = this.props
    if (scroll) this.iframeRef.current.scrollIntoView({ behavior: scroll })
    window.addEventListener('message', this.handleEvent)
  }

  componentWillUnmount () {
    window.removeEventListener('message', this.handleEvent)
  }

  handleEvent = ({ origin, data }) => {
    const { anvilURL, onEvent } = this.props
    if (anvilURL !== origin) return
    if (typeof data === 'object') {
      onEvent(data)
    }
  }

  render () {
    const { iframeURL, onEvent, anvilURL, enableDefaultStyles, scroll, ...others } = this.props
    return (
      <iframe
        id="anvil-embed-frame"
        name="Anvil Embed Frame"
        title="Anvil Embed Frame"
        {...others} // props above may be overriden
        src={iframeURL}
        ref={this.iframeRef}
        style={enableDefaultStyles
          ? {
              width: '80vw',
              height: '85vh',
              maxWidth: '1200px',
              borderStyle: 'groove',
            }
          : undefined}
      >
        <p id="anvil-iframe-warning">Your browser does not support iframes.</p>
      </iframe>
    )
  }
}

AnvilEmbedFrame.defaultProps = {
  onEvent: () => {},
  anvilURL: 'https://app.useanvil.com',
  enableDefaultStyles: true,
}

AnvilEmbedFrame.propTypes = {
  iframeURL: PropTypes.string.isRequired,
  onEvent: PropTypes.func,
  anvilURL: PropTypes.string,
  enableDefaultStyles: PropTypes.bool,
  scroll: PropTypes.oneOf(['auto', 'smooth']),
}

export default AnvilEmbedFrame
