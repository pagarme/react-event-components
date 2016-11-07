const { Component, PropTypes } = require('react')

class KeyDown extends Component {
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
    document.addEventListener('keydown', this.listen)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.listen)
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return null
  }
}

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
  do: PropTypes.func.isRequired
}

module.exports = KeyDown