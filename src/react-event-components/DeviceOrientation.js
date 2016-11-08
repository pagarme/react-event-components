const { Component, PropTypes } = require('react')

class DeviceOrientation extends Component {
  componentDidMount() {
    window.addEventListener('deviceorientation', this.props.do)
  }

  componentWillUnmount() {
    window.removeEventListener('deviceorientation', this.props.do)
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return null
  }
}

DeviceOrientation.propTypes = {
  do: PropTypes.func.isRequired
}

module.exports = DeviceOrientation
