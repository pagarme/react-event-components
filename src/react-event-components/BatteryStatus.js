import { Component, PropTypes } from 'react'

class BatteryStatus extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    if (!navigator.getBattery) { return }

    navigator.getBattery().then(({
      charging,
      chargingTime,
      dischargingTime,
      level
    }) => {
      this.props.do({
        charging,
        chargingTime,
        dischargingTime,
        level: level * 100
      });
    })
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return null
  }
}

BatteryStatus.propTypes = {
  do: PropTypes.func.isRequired
}

export default BatteryStatus
