import React from 'react'
import ReactDOM from 'react-dom'
import KeyDown from '../KeyDown'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const handle = () => {}
  ReactDOM.render(<KeyDown when="w" do={handle} />, div)
})
