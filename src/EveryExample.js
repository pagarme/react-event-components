import React, {Component} from 'react'
import {Every} from './react-event-components'

export default class EveryExample extends Component {
  constructor() {
    super()
    this.state = {
      totalTime: 0,
      color: 'rgb(0,0,0)'
    }
  }

  handleTotalTime(dt) {
    const totalTime = this.state.totalTime + dt
    this.setState({
      totalTime: totalTime,
      displayTime: Math.floor(totalTime * 100)/100
    })
  }

  handleColor() {
    const randomHex = () => Math.round(Math.random() * 255)
    this.setState({
      color: `rgb(${randomHex()},${randomHex()},${randomHex()})`
    })
  }

  render() {
    return (
      <div>
        <p style={{color: this.state.color}}>Total time: {this.state.displayTime}</p>

        <Every frame do={(dt) => this.handleTotalTime(dt)} />
        <Every s="1" ms="500" do={() => this.handleColor()} />
      </div>
    )
  }
}
