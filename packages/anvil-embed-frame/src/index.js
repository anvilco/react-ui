import React from 'react'
import PropTypes from 'prop-types'

/**
 * @typedef Props
 * @prop {String} iframeURL
 * @prop {Function} onEvent
 * @prop {String} anvilURL
 * @prop {String} scroll
 */

/**
 * @extends React.Component<Props>
 */
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

  /**
   * @param {Object} options
   * @param {String} options.origin
   * @param {Object} options.data
   */
  handleEvent = ({ origin, data }) => {
    const { anvilURL, onEvent } = this.props
    if (anvilURL !== origin) return
    if (typeof data === 'object') {
      onEvent(data)
    }
  }

  render () {
    const { iframeURL, onEvent, anvilURL, scroll, ...others } = this.props
    return (
      <iframe
        id="anvil-embed-frame"
        name="AnvilEmbedFrame"
        {...others} // props above may be overriden
        src={iframeURL}
        ref={this.iframeRef}
      >
        <p id="anvil-iframe-warning">Your browser does not support iframes.</p>
      </iframe>
    )
  }
}

AnvilEmbedFrame.defaultProps = {
  onEvent: () => {},
  anvilURL: 'https://app.useanvil.com',
}

AnvilEmbedFrame.propTypes = {
  iframeURL: PropTypes.string.isRequired,
  onLoad: PropTypes.func,
  onEvent: PropTypes.func,
  anvilURL: PropTypes.string,
  scroll: PropTypes.oneOf(['auto', 'smooth']),
}

export default AnvilEmbedFrame
