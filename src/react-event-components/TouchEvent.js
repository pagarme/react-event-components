import { Component, PropTypes } from 'react'

class Touch extends Component {
  componentDidMount() {
    this.target = this.props.children ? this.refs.target : document
    this.registerEvent('add')
  }

  componentWillUnmount() {
    this.registerEvent('remove')
  }

  registerEvent = type => {
    const action = this[`${type}Event`]
    if (Array.isArray(this.props.when)) {
      this.props.when.forEach(action)

      return
    }

    action(this.props.when)
  }

  addEvent = eventName => {
    this.target.addEventListener(`touch${eventName}`, this.props.do)
  }

  removeEvent = eventName => {
    this.target.removeEventListener(`touch${eventName}`, this.props.do)
  }

  render() {
    return null
  }
}

const validEvents = ['start', 'move', 'end', 'cancel']

Touch.propTypes = {
  /**
   * Touch event to trigger the callback
   * @type {String}
   */
  when: PropTypes.oneOfType([
    PropTypes.oneOf(validEvents).isRequired,
    PropTypes.arrayOf(PropTypes.oneOf(validEvents)).isRequired
  ]),
  /**
   * Triggered when the key is pressed
   * @type {Function}
   */
  do: PropTypes.func.isRequired
}

export default Touch
