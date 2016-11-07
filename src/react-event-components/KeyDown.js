const React = require('react')
const { PropTypes } = React
const KeyEvent = require('./KeyEvent')

const KeyDown = (props) => <KeyEvent trigger="keydown" {...props} />

KeyDown.propTypes = {
  /**
   * A keyboard key to trigger the callback
   * @type {String}
   */
  when: PropTypes.string.isRequired,
  /**
   * Triggered when the key is pressed
   * @type {Function}
   */
  run: PropTypes.func.isRequired
}

module.exports = KeyDown
