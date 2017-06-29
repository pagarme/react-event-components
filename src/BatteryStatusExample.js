import { BatteryStatus } from './react-event-components'
import React, { Component } from 'react'

export default class BatteryStatusExample extends Component {
  constructor() {
    super()
    this.state = { }
  }

  render() {
    const {
      charging,
      chargingTime,
      level
    } = this.state

    return (
      <section>
        <BatteryStatus do={this.handleBatteryChange.bind(this)} />

        <h2>BatteryStatus</h2>
        <div>charging: {charging}</div>
        <div>chargingTime: {chargingTime}</div>
        <div>{level}%</div>
      </section>
    )
  }

  handleBatteryChange (battery) {
    this.setState({ ...battery })
  }
}
