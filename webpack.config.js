/* eslint-env es6 */
/* eslint-disable no-console */

const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserlist';
const devtool = devMode ? 'source-map' : undefined;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode,
  devtool,
  target,
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    // clean: true,
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/images/[name][ext]'
  },
  watchOptions: {
    aggregateTimeout: 200
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/img'),
          to: path.resolve(__dirname, './dist/images')
        }
      ]
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src', 'index.js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader?name=./fonts/[name][ext]'
          }
        ]
      }
      // {
      //     test: /\.(svg|png|jpg|jpeg|webp)$/,
      //     type: 'asset/resource'
      // },
    ]
  }
};
