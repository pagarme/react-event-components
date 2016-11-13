import React, { Component } from 'react'
import { Touch } from './react-event-components'

export class TouchExample extends Component {
  constructor() {
    super()
    this.state = {
      type: null,
      touches: [],
      start: false,
      move: false,
      end: false,
      cancel: false
    }
  }

  handleTouch = (event) => {
    this.setState({
      type: event.type,
      touches: Array.from(event.touches)
    })
  }

  check = (event) => {
    this.setState({
      [event.target.value]: event.target.checked
    })
  }

  render() {
    return (
      <div>
        <label>start <input type="checkbox" checked={this.state.start} name="touch" value="start" onChange={this.check} /></label><br />
        <label>move <input type="checkbox" checked={this.state.move} name="touch" value="move" onChange={this.check} /></label><br />
        <label>end <input type="checkbox" checked={this.state.end} name="touch" value="end" onChange={this.check} /></label><br />
        <label>cancel <input type="checkbox" checked={this.state.cancel} name="touch" value="cancel" onChange={this.check} /></label>

        {(this.state.start && (
          <Touch when="start" do={this.handleTouch} />
        ))}

        {(this.state.move && (
          <Touch when="move" do={this.handleTouch} />
        ))}

        {(this.state.end && (
          <Touch when="end" do={this.handleTouch} />
        ))}

        {(this.state.cancel && (
          <Touch when="cancel" do={this.handleTouch} />
        ))}

        <div>Global Touch {this.state.type}</div>

        {this.state.touches.map((touch, key) => (
          <div key={key}>
            <h2>Touch {key}</h2>
            <p>
              clientX: {touch.clientX} <br />
              clientY: {touch.clientY} <br />
              rotationAngle: {touch.rotationAngle} <br />
              force: {touch.force} <br />
              identifier: {touch.identifier} <br />
              pageX: {touch.pageX} <br />
              pageY: {touch.pageY} <br />
              radiusX: {touch.radiusX} <br />
              radiusY: {touch.radiusY} <br />
              screenX: {touch.screenX} <br />
              screenY: {touch.screenY}
            </p>
          </div>
        ))}
      </div>
    )
  }
}
