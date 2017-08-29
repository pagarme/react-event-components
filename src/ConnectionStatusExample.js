import React, { Component } from 'react'
import { ConnectionStatus } from './react-event-components'

export default class ConnectionStatusExample extends Component {
  constructor() {
    super()
    this.state = {
      statusConnection: 'online'
    }
  }

  handleOnline = () => {
    this.setState(Object.assign({}, this.state, {
      statusConnection: 'online'
    }))
  }

  handleOffline = () => {
    this.setState(Object.assign({}, this.state, {
      statusConnection: 'offline'
    }))
  }

  handleConnection = (status) => {
    this.setState(Object.assign({}, this.state, {
      statusConnection: status
    }))
  }

  render() {
    return (
      <div>
        <h2>Connection Status</h2>
        <ConnectionStatus when="online" do={this.handleOnline}/>
        <ConnectionStatus when="offline" do={this.handleOffline}/>
        <ConnectionStatus when='*' do={this.handleConnection}/>
        <p>You are {this.state.statusConnection}</p>
      </div>
    )
  }
}
