const { Component } = require('react')

module.exports = class KeyUp extends Component {
  componentDidMount() {
    document.addEventListener('keyup', (event) => {
      if (event.key === this.props.when) {
        this.props.do()
      }
    })
  }
  shouldComponentUpdate() {
    return false
  }
  render() {
    return null
  }
}

