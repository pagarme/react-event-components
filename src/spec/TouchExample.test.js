import React from 'react'
import ReactDOM from 'react-dom'
import TouchExample from '../TouchExample'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TouchExample />, div)
})
