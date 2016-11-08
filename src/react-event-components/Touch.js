const React = require('react')
const { Component, PropTypes } = require('react')

class Touch extends Component {
  componentDidMount() {
    this.target = this.props.children ? this.refs.target : document

    if (Array.isArray(this.props.when)) {
      this.props.when.forEach((when) => {
        this.addEvent(when)
      })

      return
    }

    this.addEvent(this.props.when)
  }

  componentWillUnmount() {
    if (Array.isArray(this.props.when)) {
      this.props.when.forEach((when) => {
        this.removeEvent(when)
      })

      return
    }

    this.removeEvent(this.props.when)
  }

  addEvent(eventName) {
    this.target.addEventListener(`touch${eventName}`, this.props.do)
  }

  removeEvent(eventName) {
    this.target.removeEventListener(`touch${eventName}`, this.props.do)
  }

  render() {
    return this.props.children? <div ref="target">{this.props.children}</div> : null
  }
}

Touch.propTypes = {
  /**
   * start, move, end or cancel
   * @type {String}
   */
  when: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.array.isRequired
  ]),
  /**
   * Triggered when the key is pressed
   * @type {Function}
   */
  do: PropTypes.func.isRequired
}

module.exports = Touch
