import React, { Component } from 'react'
import { ConnectionStatus } from './react-event-components'

export default class ConnectionStatusExample extends Component {
  constructor() {
    super()
    this.state = {
      status: 'online'
    }
  }

  handleOnline = () => {
    this.setState({
      status: 'online'
    })
  }

  handleOffline = () => {
    this.setState({
      status: 'offline'
    })
  }

  handleConnection = (status) => {
    this.setState({ status })
  }

  render() {
    return (
      <div>
        <h2>Connection Status</h2>
        <ConnectionStatus when="online" do={this.handleOnline}/>
        <ConnectionStatus when="offline" do={this.handleOffline}/>
        <ConnectionStatus when='*' do={this.handleConnection}/>
        <p>You are {this.state.status}</p>
      </div>
    )
  }
}
