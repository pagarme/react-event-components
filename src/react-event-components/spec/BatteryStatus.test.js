import React from 'react'
import ReactDOM from 'react-dom'
import BatteryStatus from '../BatteryStatus'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const handle = () => {}
  ReactDOM.render(<BatteryStatus do={handle} />, div)
})
