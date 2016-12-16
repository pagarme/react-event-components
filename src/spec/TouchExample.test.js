import React from 'react'
import { render } from 'react-dom'
import { mount } from 'enzyme'
import TouchExample from '../TouchExample'
import sinon from 'sinon'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<TouchExample />, div)
})

it('calls handleTouch', () => {
  sinon.spy(TouchExample.prototype, 'handleTouch')
  const wrapper = mount(<TouchExample />)
  wrapper.simulate('touchStart')
  expect(TouchExample.prototype.handleTouch.calledOnce).toBe(true)
})

