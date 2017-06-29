import { Component } from 'react'
import { func } from 'prop-types'

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
  do: func.isRequired
}

export default DeviceOrientation
