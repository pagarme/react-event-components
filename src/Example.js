import React, { Component } from 'react'
import { KeyDown, Every } from './react-event-components'

export default class Example extends Component {
  constructor() {
    super()
    this.state = {
      x: 0,
      y: 0,
      totalTime: 0,
      color: 'rgb(0,0,0)'
    }
  }

  move(position) {
    this.setState(position)
  }

  render() {
    const { x, y } = this.state

    return (
      <div>
        <p>Total time: {Math.floor(this.state.totalTime * 100)/100}</p>

        <h1 style={{
          transform: `translate(${x}px, ${y}px)`,
          color: this.state.color
        }}>
          Try WASD or QEZC
        </h1>

        <KeyDown when="w" run={() => this.move({ y: y - 10 })} />
        <KeyDown when="a" run={() => this.move({ x: x - 10 })} />
        <KeyDown when="s" run={() => this.move({ y: y + 10 })} />
        <KeyDown when="d" run={() => this.move({ x: x + 10 })} />
        <KeyDown when="q" run={() => this.move({ x: x - 10, y: y - 10})} />
        <KeyDown when="e" run={() => this.move({ x: x + 10, y: y - 10})} />
        <KeyDown when="z" run={() => this.move({ x: x - 10, y: y + 10})} />
        <KeyDown when="c" run={() => this.move({ x: x + 10, y: y + 10})} />

        <Every frame run={ (dt) => {
          this.setState({ totalTime: this.state.totalTime + dt })
        }} />

        <Every s="1" ms="500" run={() => {
          const randomHex = () => Math.round(Math.random() * 255)
          const randomColor = `rgb(${randomHex()},${randomHex()},${randomHex()})`
          this.setState({
            color: randomColor
          })
        }} />

      </div>
    )
  }
}

