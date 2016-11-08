const { Component, PropTypes } = require('react')

class Touch extends Component {
  componentDidMount() {
    document.addEventListener(`touch${this.props.when}`, this.props.do)
  }

  componentWillUnmount() {
    document.removeEventListener(`touch${this.props.when}`, this.props.do)
  }

  shouldComponentUpdate() { return false }
  render() { return null }
}

Touch.propTypes = {
  /**
   * start, move, end or cancel
   * @type {String}
   */
  when: PropTypes.string.isRequired,
  /**
   * Triggered when the key is pressed
   * @type {Function}
   */
  do: PropTypes.func.isRequired
}

module.exports = Touch
