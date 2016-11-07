const { Component, PropTypes } = require('react')

class KeyUp extends Component {
  constructor() {
    super()
    this.listen = this.listen.bind(this)
  }

  listen(event) {
    if (event.key === this.props.when) {
      this.props.do()
    }
  }

  componentDidMount() {
    document.addEventListener('keyup', this.listen)
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.listen)
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return null
  }
}

KeyUp.propTypes = {
  /**
   * A keyboard key to trigger the callback
   * @type {String}
   */
  when: PropTypes.string.isRequired,
  /**
   * Triggered when the key is released
   * @type {Function}
   */
  do: PropTypes.func.isRequired
}

module.exports = KeyUp