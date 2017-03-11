import { PropTypes } from 'react'
import Base from './Base';

class KeyEvent extends Base {
  constructor(props) {
    super(props)
    this.registerEvent(this.props.trigger, this.listen, document)
  }

  listen = event =>{
    if (event.key === this.props.when) {
      this.props.do()
    }
  }
}

KeyEvent.propTypes = {
  /**
   * A trigger to add listeners to
   */
  trigger: PropTypes.string.isRequired,
  /**
   * A keyboard key to trigger the callback
   * @type {String}
   */
  when: PropTypes.string.isRequired,
  /**
   * Triggered when the key is pressed
   * @type {Function}
   */
  do: PropTypes.func.isRequired
}

export default KeyEvent
