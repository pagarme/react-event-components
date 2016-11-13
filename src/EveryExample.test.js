import React from 'react'
import ReactDOM from 'react-dom'
import EveryExample from './EveryExample'

it('renders without crashing', () => {
  const div = document.createElement('div'),
  ReactDOM.render(<EveryExample />, div)
})
