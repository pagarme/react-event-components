import React, {Component} from 'react'
import {DeviceOrientation} from './react-event-components'

export default class DeviceOrientationExample extends Component {
  constructor() {
    super()
    this.state = {
      deviceOrientation: {}
    }
  }

  handleDeviceOrientation({beta, gamma, alpha, absolute}) {
    this.setState({
      deviceOrientation: {
        beta,
        gamma,
        alpha,
        absolute
      }
    })
  }

  render() {
    return (
      <div>
        <DeviceOrientation do={this.handleDeviceOrientation} />

        <h2>DeviceOrientation</h2>

        <p>
          beta: {this.state.deviceOrientation.beta}
          <br />
          gamma: {this.state.deviceOrientation.gamma}
          <br />
          alpha: {this.state.deviceOrientation.alpha}
          <br />
          absolute: {this.state.deviceOrientation.absolute}
        </p>
      </div>
    )
  }
}
