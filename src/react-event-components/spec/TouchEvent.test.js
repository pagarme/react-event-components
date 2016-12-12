import React from 'react'
import ReactDOM from 'react-dom'
import TouchEvent from '../TouchEvent'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const handle = () => {}
  ReactDOM.render(<TouchEvent do={handle} />, div)
})
