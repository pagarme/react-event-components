import React from 'react'
import ReactDOM from 'react-dom'
import ConnectionStatus from '../ConnectionStatus'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const handle = () => {}
  ReactDOM.render(<div>
      <ConnectionStatus when='online' do={handle} />
      <ConnectionStatus do={handle} />
    </div>, div)
})
