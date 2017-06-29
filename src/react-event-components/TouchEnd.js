import React from 'react'
import { func } from 'prop-types'
import TouchEvent from './TouchEvent'

const TouchEnd = (props) => <TouchEvent when="end" {...props} />

TouchEnd.propTypes = {
  do: func.isRequired
}

export default TouchEnd
