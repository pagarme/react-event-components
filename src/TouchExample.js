import React, { Component } from 'react'
import { TouchStart, TouchMove, TouchEnd, TouchCancel } from './react-event-components'

export class TouchExample extends Component {
  constructor() {
    super()
    this.state = {
      type: null,
      touches: [],
      start: false,
      move: false,
      end: false,
      cancel: false,
      touchEnd: []
    }
  }

  handleTouch = (event) => {
    this.setState({
      type: event.type,
      touches: Array.from(event.touches),
      touchEnd: []
    })

    if (event.type !== 'touchend') { return }

    this.setState({
      touches: Array.from(event.changedTouches)
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
        <TouchSwitches check={this.check} state={this.state} />
        <TouchBinds state={this.state} handleTouch={this.handleTouch} />
        <TouchTable state={this.state} />
      </div>
    )
  }
}

function TouchTable(props) {
  return (
    <div>
      {props.state.touches.map((touch, key) => (
        <div key={key}>
          <h2>Global event {props.state.type}</h2>
          <p>
            clientX: {touch.clientX}
            <br />
            clientY: {touch.clientY}
            <br />
            rotationAngle: {touch.rotationAngle}
            <br />
            force: {touch.force}
            <br />
            identifier: {touch.identifier}
            <br />
            pageX: {touch.pageX}
            <br />
            pageY: {touch.pageY}
            <br />
            radiusX: {touch.radiusX}
            <br />
            radiusY: {touch.radiusY}
            <br />
            screenX: {touch.screenX}
            <br />
            screenY: {touch.screenY}
          </p>
        </div>
      ))}
    </div>
  )
}

function TouchBinds(props) {
  return (
    <div>
      {props.state.start && (<TouchStart do={props.handleTouch} />)}
      {props.state.move && (<TouchMove do={props.handleTouch} />)}
      {props.state.end && (<TouchEnd do={props.handleTouch} />)}
      {props.state.cancel && (<TouchCancel do={props.handleTouch} />)}
    </div>
  )
}

function TouchSwitches(props) {
  return (
    <div>
      <label>start
        <input
          type="checkbox"
          checked={props.state.start}
          name="touch"
          value="start"
          onChange={props.check}
        />
      </label>

      <br />

      <label>move
        <input
          type="checkbox"
          checked={props.state.move}
          name="touch"
          value="move"
          onChange={props.check}
        />
      </label>

      <br />

      <label>end
        <input
          type="checkbox"
          checked={props.state.end}
          name="touch"
          value="end"
          onChange={props.check}
        />
      </label>

      <br />

      <label>cancel
        <input
          type="checkbox"
          checked={props.state.cancel}
          name="touch"
          value="cancel"
          onChange={props.check}
        />
      </label>
    </div>
  )
}
