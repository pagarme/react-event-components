import React from 'react'
import { func } from 'prop-types'
import TouchEvent from './TouchEvent'

const TouchCancel = (props) => <TouchEvent when="cancel" {...props} />

TouchCancel.propTypes = {
  do: func.isRequired
}

export default TouchCancel
