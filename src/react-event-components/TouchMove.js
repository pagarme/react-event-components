import React, { PropTypes } from 'react'
import TouchEvent from './TouchEvent'

const TouchMove = (props) => <TouchEvent when="move" {...props} />

TouchMove.propTypes = {
  do: PropTypes.func.isRequired
}

export default TouchMove
