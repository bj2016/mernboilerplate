const webpack = require('webpack')
const path = require('path')

const plugins = []

const commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'commons',
  filename: 'commons.bundle.js',
  minChunks: 2
})

const envPlugin = new webpack.DefinePlugin({
  'process.env': {
    'VIRTUAL_HOST': JSON.stringify(process.env.VIRTUAL_HOST)
  }
})

module.exports = {
  entry: ['./client/source/'],

  output: {
    path: `${__dirname}/client/public/js/`,
    filename: 'app.bundle.js'
  },

  devtool: 'source-map',

  resolve: {
    alias: {
        views: path.resolve(__dirname, 'client/source/comps/views'),
        stores: path.resolve(__dirname, 'client/source/stores'),
        images: path.resolve(__dirname, 'client/source/images'),
        comps: path.resolve(__dirname, 'client/source/comps'),
        lib: path.resolve(__dirname, 'client/source/comps/lib'),
        stylus: path.resolve(__dirname, 'client/source/stylus'),
        utils: path.resolve(__dirname, 'client/source/utils'),
        consts: path.resolve(__dirname, 'client/source/consts'),
        root: path.resolve(__dirname, 'client/source')
    },
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules')
    ]
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      ]
    }, {
      test: /\.(styl)$/,
      exclude: /(node_modules)/,
      use: ['style-loader', 'css-loader', 'stylus-loader']
    }]
  },

  plugins: [commonsPlugin, envPlugin]
}
