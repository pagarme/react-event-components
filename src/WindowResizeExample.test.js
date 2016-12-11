import React from 'react'
import ReactDOM from 'react-dom'
import WindowResizeExample from './WindowResizeExample'

it('renders without crashing', () => {
  const div = document.createElement('div'),
  ReactDOM.render(<WindowResizeExample />, div)
})
