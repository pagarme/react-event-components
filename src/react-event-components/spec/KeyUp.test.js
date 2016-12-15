import React from 'react'
import ReactDOM from 'react-dom'
import KeyUp from '../KeyUp'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const handle = () => {}
  ReactDOM.render(<KeyUp when="w" do={handle} />, div)
})
