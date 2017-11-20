'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

const devtool = 'source-map'

const entry = {
  app: path.resolve(__dirname, 'src/main.js')
}

const output = {
  path: path.resolve(__dirname, 'build'),
  filename: '[name].js'
}

const resolve = {
  extensions: [
    '.js',
    '.html'
  ],
  modules: [
    'src'
  ]
}

const rules = [{
  test: /\.js$/,
  exclude: /node_modules/,
  use: ['babel-loader']
}, {
  test: /\.(css)$/,
  use: [
    'style-loader',
    'css-loader',
    'resolve-url-loader'
  ]
}, {
  test: /\.html$/,
  use: ['html-loader']
}, {
  test: /\.(jpg|jpeg|png)$/,
  use: [
    'file-loader'
  ]
}]

const plugins = [
  new HtmlWebpackPlugin({
    title: 'example',
    inject: 'head',
    template: path.resolve(__dirname, 'static/index.html')
  }),
  new DashboardPlugin(),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })
]

const devServer = {
  compress: true,
  inline: true,
  overlay: true,
  historyApiFallback: true
}

module.exports = {
  devtool,
  entry,
  output,
  resolve,
  module: {
    rules
  },
  plugins,
  devServer
}
