const React = require('react')
const { PropTypes } = React
const TouchEvent = require('./TouchEvent')

const TouchMove = (props) => <TouchEvent when="move" {...props} />

TouchMove.propTypes = {
  do: PropTypes.func.isRequired
}

module.exports = TouchMove
