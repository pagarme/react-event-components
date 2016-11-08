import {KeyDown} from './react-event-components'
import React, {Component} from 'react'

export default class KeyDownExample extends Component {
  constructor() {
    super()
    this.state = {
      x: 0,
      y: 0,
<<<<<<< 611f0521af5d0c5576f5d304930fda927eaf4f37:src/KeyDownExample.js
      color: 'rgb(0,0,0)'
=======
      totalTime: 0,
      color: 'rgb(0,0,0)',
      touchType: null,
      targetTouchType: null
>>>>>>> Attach touch event to children:src/Example.js
    }
  }

  move(position) {
    this.setState(position)
  }

  handleTouch = (event) => {
    this.setState({
      touchType: event.type
    })
  }

  handleTargetTouch = (event) => {
    this.setState({
      targetTouchType: event.type
    })
  }

  render() {
    const {x, y, color} = this.state
    return (
      <div>
        <h1 style={{
          transform: `translate(${x}px, ${y}px)`,
          color: color
        }}>
          Try WASD or QEZC
        </h1>

        <KeyDown when="w" do={() => this.move({ y: y - 10 })} />
        <KeyDown when="a" do={() => this.move({ x: x - 10 })} />
        <KeyDown when="s" do={() => this.move({ y: y + 10 })} />
        <KeyDown when="d" do={() => this.move({ x: x + 10 })} />
        <KeyDown when="q" do={() => this.move({ x: x - 10, y: y - 10})} />
        <KeyDown when="e" do={() => this.move({ x: x + 10, y: y - 10})} />
        <KeyDown when="z" do={() => this.move({ x: x - 10, y: y + 10})} />
        <KeyDown when="c" do={() => this.move({ x: x + 10, y: y + 10})} />
<<<<<<< 611f0521af5d0c5576f5d304930fda927eaf4f37:src/KeyDownExample.js
=======

        <Every frame do={ (dt) => {
          this.setState({ totalTime: this.state.totalTime + dt })
        }} />

        <Every s="1" ms="500" do={() => {
          const randomHex = () => Math.round(Math.random() * 255)
          const randomColor = `rgb(${randomHex()},${randomHex()},${randomHex()})`
          this.setState({
            color: randomColor
          })
        }} />

        <Touch when="start" do={this.handleTouch} />
        <Touch when="move" do={this.handleTouch} />
        <Touch when="end" do={this.handleTouch} />

        <div>Global Touch {this.state.touchType}</div>

        <Touch when="move" do={this.handleTargetTouch}>
          <div>Touch this text: {this.state.targetTouchType}</div>
        </Touch>
>>>>>>> Attach touch event to children:src/Example.js
      </div>
    )
  }
}
