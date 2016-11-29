import React, { PropTypes } from 'react'
import TouchEvent from './TouchEvent'

const TouchCancel = (props) => <TouchEvent when="cancel" {...props} />

TouchCancel.propTypes = {
  do: PropTypes.func.isRequired
}

export default TouchCancel
