const path = require('path');
// const dotenv = require('dotenv');
// const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const env = dotenv.config().parsed;
// const envKeys = Object.keys(env).reduce((prev, next) => {
//   prev[`process.env.${next}`] = JSON.stringify(env[next]);
//   return prev;
// }, {});

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    'babel-polyfill',
    './index.tsx'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                minimize: false
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'images/',
            name: '[name]-[hash].[ext]'
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    // proxy: [{
    //     context: ['/auth', '/api'],
    //     target: 'http://localhost:5000'
    // }],
    port: 3000
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css'
    })
    // new webpack.DefinePlugin(envKeys)
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [
      path.join(__dirname, 'node_modules')
    ]
  }
};
