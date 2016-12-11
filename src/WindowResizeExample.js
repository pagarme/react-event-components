import React, { Component } from 'react'
import { WindowResize } from './react-event-components'
import styles from './WindowResizeExample.css'

export default class WindowResizeExample extends Component {
  constructor() {
    super()
    this.state = {
      title: 'Resize Your Window',
      innerWidth: window.innerWidth
    }
  }

  handleWindowResize(window) {
    this.setState(Object.assign(this.state, {
      innerWidth: window.innerWidth,
      innerWidth: window.innerWidth
    }))
  }

  render() {
    return (
      <div className="resize-example">
        <WindowResize do={this.handleWindowResize.bind(this)} />

        <p>{this.state.title} {this.state.innerWidth}px</p>
      </div>
    )
  }
}
