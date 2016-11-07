const React = require('react')
const { PropTypes } = React
const KeyEvent = require('./KeyEvent')

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

module.exports = KeyUp
