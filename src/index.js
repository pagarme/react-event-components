import React from 'react'
import ReactDOM from 'react-dom'
import KeyDownExample from './KeyDownExample'
import EveryExample from './EveryExample'
import DeviceOrientationExample from './DeviceOrientationExample'
import TouchExample from './TouchExample'
import GeolocationExample from './GeolocationExample'

ReactDOM.render(
  <div>
    <EveryExample />
    <KeyDownExample />
    <DeviceOrientationExample />
    <TouchExample />
    <GeolocationExample />
  </div>,
  document.getElementById('root')
)
