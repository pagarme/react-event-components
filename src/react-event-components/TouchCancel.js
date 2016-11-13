const React = require('react')
const { PropTypes } = React
const TouchEvent = require('./TouchEvent')

const TouchCancel = (props) => <TouchEvent when="cancel" {...props} />

TouchCancel.propTypes = {
  do: PropTypes.func.isRequired
}

module.exports = TouchCancel
