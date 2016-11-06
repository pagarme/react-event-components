import React, { Component } from 'react'
import { KeyDown } from './react-event-components'

export default class Example extends Component {
  constructor() {
    super()
    this.state = {
      x: 0,
      y: 0
    }
  }

  move(position) {
    this.setState(position)
  }

  render() {
    const { x, y } = this.state

    return (
      <div style={{ transform: `translate(${x}px, ${y}px)` }}>
      	<h1 style={{ textAlign: 'center', marginTop: '25%' }}>
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
      </div>
    )
  }
}

