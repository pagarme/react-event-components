import { Component } from 'react'
import { func, string } from 'prop-types'

class KeyEvent extends Component {
  constructor(props) {
    super(props)
    this.handleTrigger = this.handleTrigger.bind(this)
  }

  handleTrigger(event) {
    if (this.props.when === event.key) {
      this.props.do(event)
    }
    if (this.props.when === '*' || !this.props.when) {
      this.props.do(event)
    }
  }

  componentDidMount() {
    document.addEventListener(this.props.trigger, this.handleTrigger)
  }

  componentWillUnmount() {
    document.removeEventListener(this.props.trigger, this.handleTrigger)
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
  when: string,
  /**
   * Triggered when the key is pressed
   * @type {Function}
   */
  do: func.isRequired
}

export default KeyEvent
