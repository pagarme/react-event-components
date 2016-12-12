import React from 'react'
import ReactDOM from 'react-dom'
import DeviceOrientation from '../DeviceOrientation'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const handle = () => {}
  ReactDOM.render(<DeviceOrientation do={handle} />, div)
})
