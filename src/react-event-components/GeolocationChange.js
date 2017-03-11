import { PropTypes } from 'react'
import Base from './Base'

const geolocation = 'geolocation' in navigator ? navigator.geolocation : null

class GeolocationChange extends Base {
  componentDidMount() {
    if (geolocation) {
      const watchId = geolocation.watchPosition(
        this.props.do,
        this.handleError
      )
      this.setState({ watchId })
    }
  }

  componentWillUnmount() {
    if (geolocation) {
      geolocation.clearWatch(this.state.watchId)
    }
  }

  handleError = error => {
    if (typeof this.props.onError === 'function') {
      this.props.onError(error)
    }
  }
}

GeolocationChange.propTypes = {
  /**
   * Triggered when the location change
   * @type {Function}
   */
  do: PropTypes.func.isRequired,
  /**
   * Triggered when location error occurs
   * @type {Function}
   */
  onError: PropTypes.func
}

export default GeolocationChange
