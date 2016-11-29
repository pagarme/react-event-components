import React, { PropTypes } from 'react'
import KeyEvent from './KeyEvent'

const KeyUp = (props) => <KeyEvent trigger="keyup" {...props} />

KeyUp.propTypes = {
  /**
   * A keyboard key to trigger the callback
   * @type {String}
   */
  when: PropTypes.string.isRequired,
  /**
   * Triggered when the key is pressed
   * @type {Function}
   */
  do: PropTypes.func.isRequired
}

export default KeyUp
