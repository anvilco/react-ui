import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

class AnvilSignatureFrame extends React.Component {
  constructor (props) {
    super(props)
    this.iframeRef = React.createRef()
    this.handleSignFinish = this.handleSignFinish.bind(this)
  }

  componentDidMount () {
    const { scroll } = this.props
    window.addEventListener('message', this.handleSignFinish)
    if (scroll) this.iframeRef.current.scrollIntoView({ behavior: scroll })
  }

  componentWillUnmount () {
    window.removeEventListener('message', this.handleSignFinish)
  }

  handleSignFinish ({ origin, data: url }) {
    if (this.props.anvilURL !== origin) return
    this.props.onFinish(url)
  }

  render () {
    const { signURL, onLoad, docsProps, ...otherProps } = this.props
    return (
      <iframe
        id="anvil-signature-frame"
        name="Anvil Etch E-Sign"
        title="Anvil Etch E-Sign"
        {...otherProps}
        src={signURL}
        onLoad={onLoad}
        ref={this.iframeRef}
      >
        <p className="anvil-docs" {...docsProps}>Your browser does not support iframes.</p>
      </iframe>
    )
  }
}

AnvilSignatureFrame.defaultProps = {
  onFinish: (url) => {
    window.location.assign(url)
    console.log('RedirectURL:', url)
  },
  docsProps: {},
  anvilURL: 'https://app.useanvil.com',
}

AnvilSignatureFrame.propTypes = {
  signURL: PropTypes.string.isRequired,
  scroll: PropTypes.string,
  onLoad: PropTypes.func,
  onFinish: PropTypes.func,
  docsProps: PropTypes.object,
  anvilURL: PropTypes.string,
}

export default AnvilSignatureFrame
