const { Component, PropTypes } = require('react')

const geolocation = 'geolocation' in navigator ? navigator.geolocation : null

class GeolocationChange extends Component {
  componentDidMount() {
    if (geolocation) {
      const watchId = geolocation.watchPosition(
        this.props.do,
        this.handleError.bind(this)
      )
      this.setState({ watchId })
    }
  }

  componentWillUnmount() {
    if (geolocation) {
      geolocation.clearWatch(this.state.watchId)
    }
  }

  handleError (error) {
    if (typeof this.props.onError === 'function') {
      this.props.onError(error)
    }
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return null
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

module.exports = GeolocationChange
