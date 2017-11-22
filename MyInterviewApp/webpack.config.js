const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('one.css');
module.exports = {
  entry: {
    app: './src/entry.jsx'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    // host:'localhost',
    // port: 8080,
    // proxy: {
    //   "/": {
    //     target:"http://localhost:3000",
    //     changeOrigin: true
    //   }
    // }
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './index.html'
    }),
    extractCSS
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env'],
            plugins: ['transform-object-rest-spread']
          }
        }
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              modules: true
            }
        }, {
            loader: "less-loader", // compiles Less to CSS
        }]
      }
    ]
  }
}