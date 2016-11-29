import React, { PropTypes } from 'react'
import TouchEvent from './TouchEvent'

const TouchEnd = (props) => <TouchEvent when="end" {...props} />

TouchEnd.propTypes = {
  do: PropTypes.func.isRequired
}

export default TouchEnd
