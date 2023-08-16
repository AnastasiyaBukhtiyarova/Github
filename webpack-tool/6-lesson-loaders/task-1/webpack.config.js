const path = require('path');

module.exports = {
  entry: ['./src/index.js', './src/profile/profile.scss', './src/index.scss'],
  output: {
    filename: 'bundle.js',
    assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
  },
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /.(jpg|png)$/,
        type: 'asset/resource',
        use: {
          //  loader: 'image-webpack-loader',
          loader: 'url-loader',
          options: {
            limit: 8192,
            fileName: '[name].[ext]',
          },
        },
      },
    ],
  },
};
