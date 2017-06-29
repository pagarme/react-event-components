import React from 'react'
import { render } from 'react-dom'
import KeyDownExample from './KeyDownExample'
import EveryExample from './EveryExample'
import DeviceOrientationExample from './DeviceOrientationExample'
import TouchExample from './TouchExample'
import GeolocationExample from './GeolocationExample'
import WindowResizeExample from './WindowResizeExample'
import BatteryStatusExample from './BatteryStatusExample'

render(
  <div>
    <BatteryStatusExample />
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
