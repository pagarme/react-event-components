import React from 'react'
import { render } from 'react-dom'
import { shallow } from 'enzyme'
import GeolocationExample from '../GeolocationExample'
import sinon from 'sinon'
import geolocate from 'mock-geolocation'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<GeolocationExample />, div)
})

it('geo', () => {
  const point = [54.980206086231, 82.898068362003]
  geolocate.use()

  navigator.geolocation.getCurrentPosition((position) => {
    expect(position.coords.latitude).toBe(point[0])
    expect(position.coords.longitude).toBe(point[1])
  })

  geolocate.send({lat: point[0], lng: point[1]})

  geolocate.restore()
})

// it('calls componentDidMount', () => {
//   sinon.spy(GeolocationExample.prototype, 'handleLocationChange')
//   const wrapper = shallow(<GeolocationExample />)
//   global.geolocation.watchPosition()

//   expect(GeolocationExample.prototype.handleLocationChange.calledOnce).toBe(true)
// })

