const { Component, PropTypes } = require('react')

class WindowResize extends Component {
  componentDidMount() {
    window.addEventListener('resize', (event) => this.props.do(event.target))
  }

  componentWillUnmount() {
    window.removeEventListener('resize')
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return null
  }
}

WindowResize.propTypes = {
  do: PropTypes.func.isRequired
}

module.exports = WindowResize
