import React from 'react'
import ReactDOM from 'react-dom'
import ConnectionStatusExample from '../ConnectionStatusExample'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ConnectionStatusExample />, div)
})
