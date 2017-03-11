import { PropTypes } from 'react'
import Base from './Base'

class WindowResize extends Base {
  constructor(props) {
    super(props)
    this.registerEvent('resize', e => this.props.do(e.target))
  }
}

WindowResize.propTypes = {
  do: PropTypes.func.isRequired
}

export default WindowResize
