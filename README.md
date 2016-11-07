# React Event Components

A set of components designed as an idiomatic way of working
with global, raw input (keyboard, mouse, touch, etc) in React.

## Example

A live demo can be found at https://pagarme.github.io/react-event-components

## Install

`yarn add react-event-components`  
or  
`npm install react-event-components --save`

## Usage

```javascript
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { KeyDown, Every } from './react-event-components'

class Example extends Component {
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

ReactDOM.render(
  <Example />,
  document.getElementById('root')
)
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

