import React from 'react'
import { render } from 'react-dom'
import { mount } from 'enzyme'
import EveryExample from '../EveryExample'
import sinon from 'sinon'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<EveryExample />, div)
})

it('calls componentDidMount', () => {
  sinon.spy(EveryExample.prototype, 'handleColor')
  sinon.spy(EveryExample.prototype, 'handleTotalTime')
  const wrapper = mount(<EveryExample />)

  setTimeout(() => {
    expect(EveryExample.prototype.handleTotalTime.calledOnce).toBe(true)
    expect(EveryExample.prototype.handleColor.calledOnce).toBe(true)
  }, 1600)
})
