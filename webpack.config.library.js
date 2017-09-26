const path = require('path')
const reactscripts = require('react-scripts/config/webpack.config.prod.js')

reactscripts.output = {
  libraryTarget: 'commonjs2',
  library: 'react-event-components',
  path: path.join(__dirname, 'dist'),
  filename: 'react-event-components.js'
}

module.exports = reactscripts
