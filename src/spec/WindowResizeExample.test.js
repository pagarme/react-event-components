import React from 'react'
import { render } from 'react-dom'
import { mount } from 'enzyme'
import WindowResizeExample from '../WindowResizeExample'
import sinon from 'sinon'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<WindowResizeExample />, div)
})

it('calls componentDidMount', () => {
  sinon.spy(WindowResizeExample.prototype, 'handleWindowResize')
  const wrapper = mount(<WindowResizeExample />)
  window.dispatchEvent(new Event('resize'))
  expect(WindowResizeExample.prototype.handleWindowResize.calledOnce).toBe(true)
})
