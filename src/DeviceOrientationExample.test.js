import React from 'react'
import ReactDOM from 'react-dom'
import DeviceOrientationExample from './DeviceOrientationExample'

it('renders without crashing', () => {
  const div = document.createElement('div'),
  ReactDOM.render(<DeviceOrientationExample />, div)
})
