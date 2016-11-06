const { Component } = require('react')

module.exports = class KeyDown extends Component {
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
    document.addEventListener('keydown', this.listen)
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.listen)
  }
  
  shouldComponentUpdate() {
    return false
  }
  
  render() {
    return null
  }
}
