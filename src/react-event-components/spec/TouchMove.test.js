import React from 'react'
import ReactDOM from 'react-dom'
import TouchMove from '../TouchMove'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const handle = () => {}
  ReactDOM.render(<TouchMove do={handle} />, div)
})
