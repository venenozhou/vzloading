'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
let vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
//entry

let entry = {
  app: resolve('examples/app'),
  vendors: ['vue']
}
//output
let output = {
  path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
    ? config.build.assetsPublicPath
    : config.dev.assetsPublicPath
}
if(process.env.NODE_ENV === 'production'){
  entry = {
    index: path.resolve(__dirname, '../src/index')
  }
  output = {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].min.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
  vueLoaderConfig = {
    loaders: {
      css: 'vue-style-loader!css-loader'
    },
    postLoaders: {
      html: 'babel-loader'
    }
  }
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: entry,
  output: output,
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      ...([{
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve(`src`)],
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: true
        }
      }]),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'scss']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
