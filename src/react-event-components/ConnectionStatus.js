import { Component } from 'react'
import { func, string } from 'prop-types'

class ConnectionStatus extends Component {
  constructor(props) {
    super(props)
    this.handleTrigger = this.handleTrigger.bind(this)
  }

  handleTrigger(event) {
    const status = navigator.onLine ? 'online' : 'offline'

    if (this.props.when === status) {
      this.props.do()
    }

    if(this.props.when === '*' || !this.props.when){
      this.props.do(event.type)
    }
  }

  componentDidMount() {
    if (!navigator.onLine) { return }
    window.addEventListener('online', this.handleTrigger)
    window.addEventListener('offline', this.handleTrigger)
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleTrigger)
    window.removeEventListener('offline', this.handleTrigger)
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return null
  }
}

ConnectionStatus.propTypes = {
  /**
   * A status connection (online or offline) to trigger the callback
   * @type {String}
   */
  when: string,
  /**
   * Triggered when it's in the status that you choose
   * @type {Function}
   */
  do: func.isRequired
}

export default ConnectionStatus
