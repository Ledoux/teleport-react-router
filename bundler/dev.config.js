const webpack = require('webpack')
const config = require('./config')
const serverConfig = require('./server.config.js')

module.exports = Object.assign({},
  config,
  {
    devtool: 'source-map',
    entry: Object.assign(
      {
        index: [
          'react-hot-loader/patch',
          `webpack-dev-server/client?${serverConfig.url}`,
          'webpack/hot/only-dev-server'
        ].concat(config.entry.index)
      }
    ),
    output: Object.assign({},
      config.output,
      {
        publicPath: `${serverConfig.url}${config.output.publicPath}/`
      }
    ),
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }
)
