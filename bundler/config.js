const path = require('path')
const ROOT_DIR = path.join(__dirname, '../')

module.exports = {
  entry: {
    index: [
      'babel-polyfill',
      path.join(ROOT_DIR, 'frontend/scripts/index.js')
    ]
  },
  module: {
    rules: [
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader'
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader?cacheDirectory'
      }
    ]
  },
  output: {
    path: path.join(ROOT_DIR, 'backend/servers/express-webrouter/app/static'),
    publicPath: '/static',
    filename: 'scripts/index_bundle.js'
  }
}
