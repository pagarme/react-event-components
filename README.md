# React Event Components

A set of components designed as an idiomatic way of working
with global, raw input (keyboard, mouse, touch, etc) in React.

## Example

A live demo can be found at https://pagarme.github.io/react-event-components

## Install

```
yarn add react-event-components
```

or

```
npm install react-event-components --save
```

## Usage

### Key Events

Call the handler everytime a key event happen.

```jsx
import { KeyDown } from './react-event-components'
import React, { Component } from 'react'

export default class KeyDownExample extends Component {
  constructor() {
    super()
    this.state = {
      x: 0,
      y: 0,
      color: 'rgb(0,0,0)'
    }
  }

  move(position) {
    this.setState(position)
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
      </div>
    )
  }
}
```

### Timer Events

Runs a function recurrently. Passes the delta time to handler.

```jsx
import React, { Component } from 'react'
import { Every } from './react-event-components'

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
        <p style={{ color: this.state.color }}>Total time: { this.state.displayTime }</p>

        <Every frame do={(dt) => this.handleTotalTime(dt)} />
        <Every s="1" ms="500" do={() => this.handleColor()} />
      </div>
    )
  }
}

## DeviceOrientation

Call do property every time it changes device orientation data

```js
import React, {Component} from 'react'
import {DeviceOrientation} from './react-event-components'

export default class DeviceOrientationExample extends Component {
  constructor() {
    super()
    this.state = {
      deviceOrientation: {}
    }
  }

  handleDeviceOrientation = ({beta, gamma, alpha, absolute}) => {
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
```

```

# LICENSE

```
MIT License

Copyright (c) 2016 Derek Willian Stavis
Copyright (c) 2016 Marco Guaspari Worms

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the \"Software\"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
