import React from 'react'
import { render } from 'react-dom'
import { mount } from 'enzyme'
import DeviceOrientationExample from '../DeviceOrientationExample'
import sinon from 'sinon'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<DeviceOrientationExample />, div)
})

it('calls handleDeviceOrientation', () => {
  sinon.spy(DeviceOrientationExample.prototype, 'handleDeviceOrientation')
  const wrapper = mount(<DeviceOrientationExample />)
  const e = document.createEvent('CustomEvent')
  e.initEvent('deviceorientation', true, true)
  window.dispatchEvent(e)
  expect(DeviceOrientationExample.prototype.handleDeviceOrientation.calledOnce).toBe(true)
})

