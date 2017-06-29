import { GeolocationChange } from './react-event-components'
import React, { Component } from 'react'

export default class GeolocationChangeExample extends Component {
  state = {}

  handleLocationChange ({ coords, timestamp }) {
    this.setState({
      coords: {
        latitude: coords.latitude,
        longitude: coords.longitude,
        altitude: coords.altitude,
        accuracy: coords.accuracy,
        altitudeAccuracy: coords.altitudeAccuracy,
        heading: coords.heading,
        speed: coords.speed
      },
      timestamp
    })
  }

  render() {
    const {
      coords = {},
      timestamp = 0
    } = this.state

    const {
      latitude,
      longitude,
      altitude,
      heading,
      speed,
      accuracy,
      altitudeAccuracy
    } = coords

    return (
      <section>
        <GeolocationChange do={this.handleLocationChange.bind(this)} />
        <h2>Geolocation</h2>
        {
          this.state.coords ?
            <div>
              <img alt="location map" src={`https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=16&size=300x300&sensor=false`} />
              <ul>
                <li>Updated at: { new Date(timestamp).toString() }</li>
                <li>Latitude: { latitude }</li>
                <li>Longitude: { longitude }</li>
                <li>Altitude: { altitude }</li>
                <li>Heading: { heading }</li>
                <li>Speed: { speed }</li>
                <li>
                  Accuracy:
                  <ul>
                    <li>Latitude/Longitude: { accuracy }</li>
                    <li>Altitude: { altitudeAccuracy }</li>
                  </ul>
                </li>
              </ul>
            </div>
          :
            <span>Waiting for location...</span>
        }
      </section>
    )
  }
}
