import React from 'react'
import PropTypes from 'prop-types'

const DeleteIcon = ({ width, height, ...others }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x" {...others}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

DeleteIcon.defaultProps = {
  width: 30,
  height: 30,
}

DeleteIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}

export default DeleteIcon
