import Base from './Base'

class Every extends Base {
  constructor(props) {
    super(props)
    this.state = {
      intervalId: null,
      shouldTriggerNextFrame: true,
      lastFrame: Date.now()
    }
  }

  componentDidMount() {
    if (this.props.frame) {
      this.handleEveryFrame()
      return
    }
    const interval = ((Number(this.props.s) || 0) * 1000) + (Number(this.props.ms) || 0)
    this.setState({ ...this.state, intervalId: window.setInterval(this.props.do, interval) })
  }

  componentWillUnmount() {
    if (this.props.frame) {
      this.setState({ ...this.state, shouldTriggerNextFrame: false })
      return
    }
    window.clearInterval(this.state.intervalId)
  }

  handleEveryFrame = () => {
    if (!this.state.shouldTriggerNextFrame) { return }
    const now = Date.now()
    const dt = now - this.state.lastFrame
    this.setState({ ...this.state, lastFrame: now })
    this.props.do(dt / 1000)
    window.requestAnimationFrame(this.handleEveryFrame)
  }
}

export default Every
