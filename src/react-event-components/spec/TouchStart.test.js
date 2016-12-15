import React from 'react'
import ReactDOM from 'react-dom'
import TouchStart from '../TouchStart'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const handle = () => {}
  ReactDOM.render(<TouchStart do={handle} />, div)
})
