import React from 'react'
import { func, string } from 'prop-types'
import KeyEvent from './KeyEvent'

const KeyUp = (props) => <KeyEvent trigger="keyup" {...props} />

KeyUp.propTypes = {
  /**
   * A keyboard key to trigger the callback
   * @type {String}
   */
  when: string.isRequired,
  /**
   * Triggered when the key is pressed
   * @type {Function}
   */
  do: func.isRequired
}

export default KeyUp
