import { PropTypes } from 'react'
import Base from './Base'

class DeviceOrientation extends Base {
  constructor(props) {
    super(props)
    this.registerEvent('deviceorientation', this.props.do)
  }
}

DeviceOrientation.propTypes = {
  do: PropTypes.func.isRequired
}

export default DeviceOrientation
