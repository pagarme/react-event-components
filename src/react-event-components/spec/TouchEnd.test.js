import React from 'react'
import ReactDOM from 'react-dom'
import TouchEnd from '../TouchEnd'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const handle = () => {}
  ReactDOM.render(<TouchEnd do={handle} />, div)
})
