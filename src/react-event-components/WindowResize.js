import { Component } from 'react'
import { func } from 'prop-types'

class WindowResize extends Component {
  componentDidMount() {
    window.addEventListener('resize', (event) => this.props.do(event))
  }

  componentWillUnmount() {
    window.removeEventListener('resize')
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return null
  }
}

WindowResize.propTypes = {
  do: func.isRequired
}

export default WindowResize
