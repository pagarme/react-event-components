import { Component, PropTypes } from 'react'

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

export default DeviceOrientation
