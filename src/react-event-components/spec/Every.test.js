import React from 'react'
import ReactDOM from 'react-dom'
import Every from '../Every'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const handle = () => {}
  ReactDOM.render(<Every do={handle} />, div)
})
