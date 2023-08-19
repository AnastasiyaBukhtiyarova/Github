const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: ['./src/index.js', './src/profile/profile.scss', './src/index.css'],
  output: {
    filename: 'bundle.js',
    assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
  },
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /.(jpg|png)$/,
        type: 'asset/resource',
        use: {
          loader: 'url-loader',

          options: {
            limit: 8192,
            fileName: '[name].[ext]',
            outputPath: 'images',
            
          },
        },
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
