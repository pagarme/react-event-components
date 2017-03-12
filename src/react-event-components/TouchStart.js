import React, { PropTypes } from 'react'
import TouchEvent from './TouchEvent'

const TouchStart = props => <TouchEvent when="start" {...props} />

TouchStart.propTypes = {
  do: PropTypes.func.isRequired
}

export default TouchStart
