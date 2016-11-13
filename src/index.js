import React from 'react'
import ReactDOM from 'react-dom'
import KeyDownExample from './KeyDownExample'
import EveryExample from './EveryExample'
import DeviceOrientationExample from './DeviceOrientationExample'

ReactDOM.render(
  <div>
    <EveryExample />
    <KeyDownExample />
    <DeviceOrientationExample />
  </div>,
  document.getElementById('root')
)
