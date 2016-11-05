const { Component } = require('react')

module.exports = class KeyDown extends Component {
  componentDidMount() {
    document.addEventListener('keydown', (event) => {
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

