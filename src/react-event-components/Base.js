import { Component } from 'react'

function applyEvents(e, action, target = window) {
  for (let i = 0; i < e.length; i++) {
    target[`${action}EventListener`](e[i].type, e[i].callback)
  }
}

class Base extends Component {
  constructor(props) {
    super(props)
    this.events = []
  }

  componentDidMount() {
    applyEvents(this.events, 'add')
  }

  componentWillUnmount() {
    applyEvents(this.events, 'remove')
  }

  registerEvent = (type, callback, target) => {
    this.events = [...this.events, { type, callback, target }]
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return null
  }
}

export default Base
