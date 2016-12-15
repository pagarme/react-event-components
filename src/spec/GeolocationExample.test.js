import React from 'react'
import ReactDOM from 'react-dom'
import GeolocationExample from '../GeolocationExample'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<GeolocationExample />, div)
})
