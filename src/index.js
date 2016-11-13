import React from 'react'
import ReactDOM from 'react-dom'
import KeyDownExample from './KeyDownExample'
import EveryExample from './EveryExample'
import DeviceOrientationExample from './DeviceOrientationExample'
import TouchExample from './TouchExample'

ReactDOM.render(
  <div>
    <EveryExample />
    <KeyDownExample />
    <DeviceOrientationExample />
    <TouchExample />
  </div>,
  document.getElementById('root')
)
