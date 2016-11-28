const path = require('path')

// This will always be a production build.
// Also, this is needed because react-scripts
// abort if NODE_ENV isn't production.

process.env.NODE_ENV = 'production'

const config = require('react-scripts/config/webpack.config.prod.js')

// Export here, but we will mutate below.

module.exports = config

// Import all modules we want to remove
// from original configuration.

const UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')

// Create two entries from the same file.
// We will use .min suffix to catch later.

config.entry = {
  'react-event-components': './src/react-event-components/index.js',
  'react-event-components.min': './src/react-event-components/index.js',
}

// Reconfigure output to dist/ directory and target
// to a commonjs2 library build.

config.output = {
  path: path.join(__dirname, 'dist'),
  filename: '[name].js', // name will come from entry
  library: 'react-event-components',
  libraryTarget: 'commonjs2',
}

// Declare all external dependencies, that should be
// present on peer's (package user) project.

config.externals = {
  'react': 'react',
  'react-dom': 'react-dom',
}

// Use the imported modules to create a blacklist of
// all modules constructor names we want to squash
// from original (react-scripts) config.

const blacklist = [
  HtmlWebpackPlugin,
  ManifestPlugin,
  InterpolateHtmlPlugin,
].map(plugin => plugin.name)

// Reduce the original plugin list in order to create
// a new list of plugins without blacklisted ones.

config.plugins = config.plugins.reduce((acc, plugin) => {
  if (blacklist.includes(plugin.constructor.name)) {
    return acc
  }

  // Tell Uglify to minify only .min.js entry.

  if (plugin.constructor.name === UglifyJsPlugin.name) {
    plugin.options.include = /\.min\.js$/
  }

  return acc.concat(plugin)
}, [])

