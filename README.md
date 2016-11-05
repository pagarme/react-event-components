# React Event Components

A set of components designed as an idiomatic way of working
with global, raw input (keyboard, mouse, touch, etc) in React.

## Usage

```javascript
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { KeyDown } from 'react-event-components'

class App extends Component {
  constructor() {
    super()
    this.state = {
      x: 0,
      y: 0
    }
  }

  render() {
    const { x, y } = this.state

    return (
      <div style={{ transform: `translate(${x}px, ${y}px)` }}>
      	<p>Try WASD</p>
        <KeyDown when="w" do={() => this.setState({ y: y - 10 })} />
        <KeyDown when="a" do={() => this.setState({ x: x - 10 })} />
        <KeyDown when="s" do={() => this.setState({ y: y + 10 })} />
        <KeyDown when="d" do={() => this.setState({ x: x + 10 })} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
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

