const React = require('react')
const { Component, PropTypes } = require('react')

class Touch extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.target = this.props.children ? this.refs.target : document
    this.target.addEventListener(`touch${this.props.when}`, this.props.do)
  }

  componentWillUnmount() {
    this.target.removeEventListener(`touch${this.props.when}`, this.props.do)
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
  when: PropTypes.string.isRequired,
  /**
   * Triggered when the key is pressed
   * @type {Function}
   */
  do: PropTypes.func.isRequired
}

module.exports = Touch
