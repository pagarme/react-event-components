import React from 'react'
import ReactDOM from 'react-dom'
import KeyDownExample from './KeyDownExample'
import EveryExample from './EveryExample'
import DeviceOrientationExample from './DeviceOrientationExample'
import TouchExample from './TouchExample'
import GeolocationExample from './GeolocationExample'
import WindowResizeExample from './WindowResizeExample'

ReactDOM.render(
  <div>
    <EveryExample />
    <KeyDownExample />
    <DeviceOrientationExample />
    <TouchExample />
    <GeolocationExample />

    <hr />

    <WindowResizeExample />
  </div>,
  document.getElementById('root')
)
