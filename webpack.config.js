const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: './js/index.js',

  output: {
    path: __dirname + '/src/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/(node_modules)/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015'],
              plugins: ['react-html-attrs', 'transform-class-properties']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']          
      }
    ]
  }
}