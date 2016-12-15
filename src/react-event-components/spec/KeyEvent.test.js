import React from 'react'
import ReactDOM from 'react-dom'
import KeyEvent from '../KeyEvent'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const handledo = () => {}
  const handleTrigger = () => {}
  ReactDOM.render(<KeyEvent when="w" trigger="keydown" do={handledo} />, div)
})
