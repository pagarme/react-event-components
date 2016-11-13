const React = require('react')
const { PropTypes } = React
const TouchEvent = require('./TouchEvent')

const TouchStart = (props) => <TouchEvent when="start" {...props} />

TouchStart.propTypes = {
  do: PropTypes.func.isRequired
}

module.exports = TouchStart
