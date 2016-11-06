const { Component } = require('react')

module.exports = class KeyUp extends Component {
  constructor() {
    super()
    this.listen = this.listen.bind(this)
  }

  listen(event) {
    if (event.key === this.props.when) {
      this.props.do()
    }
  }

  componentDidMount() {
    document.addEventListener('keyup', this.listen)
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.listen)
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return null
  }
}
