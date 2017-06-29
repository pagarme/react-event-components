import React from 'react'
import { func } from 'prop-types'
import TouchEvent from './TouchEvent'

const TouchMove = (props) => <TouchEvent when="move" {...props} />

TouchMove.propTypes = {
  do: func.isRequired
}

export default TouchMove
