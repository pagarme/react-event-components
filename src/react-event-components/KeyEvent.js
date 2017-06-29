import { Component } from 'react'
import { func, string } from 'prop-types'

class KeyEvent extends Component {
  constructor(props) {
    super(props)
    this.listen = this.listen.bind(this)
  }

  listen(event) {
    if (event.key === this.props.when) {
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
  trigger: string.isRequired,
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

export default KeyEvent
