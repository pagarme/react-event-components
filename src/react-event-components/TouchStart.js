import React from 'react'
import { func } from 'prop-types'
import TouchEvent from './TouchEvent'

const TouchStart = (props) => <TouchEvent when="start" {...props} />

TouchStart.propTypes = {
  do: func.isRequired
}

export default TouchStart
