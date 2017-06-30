import React from 'react'
import ReactDOM from 'react-dom'
import KeyEvent from '../KeyEvent'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const handleDo = () => {}
  const handleTrigger = () => {}
  ReactDOM.render(<div>
      <KeyEvent when="w" trigger="keydown" do={handleDo} />
      <KeyEvent trigger="keydown" do={handleDo} />
    </div>, div)
})
