const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  const config = {
    entry: ['./src/index.js', './src/profile/profile.scss', './src/index.css'],
    output: {
      filename: 'bundle.js',
      assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
    },
    module: {
      rules: [
        {
          test: /.s?css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
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
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
      }),
    ],
    devServer: {
      port: 9000,
      hot: true,
    },
  };
  if (isProduction) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].css',
      })
    );
  }
  return config;
};
