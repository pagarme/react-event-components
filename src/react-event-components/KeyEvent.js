const { Component, PropTypes } = require('react')

class KeyEvent extends Component {
  constructor(props) {
    super(props)
    this.listen = this.listen.bind(this)
  }

  listen(event) {
    if (event.key === this.props.when) {
      console.log(this.props.trigger)
      this.props.do()
    }
  }

  componentDidMount() {
    document.addEventListener(this.props.trigger, this.listen)
  }

  componentWillUnmount() {
    document.removeEventListener(this.props.trigger, this.listen)
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return null
  }
}

KeyEvent.propTypes = {
  /**
   * A trigger to add listeners to
   */
  trigger: PropTypes.string.isRequired,
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

module.exports = KeyEvent
