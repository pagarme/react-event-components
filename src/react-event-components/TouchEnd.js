const React = require('react')
const { PropTypes } = React
const TouchEvent = require('./TouchEvent')

const TouchEnd = (props) => <TouchEvent when="end" {...props} />

TouchEnd.propTypes = {
  do: PropTypes.func.isRequired
}

module.exports = TouchEnd
