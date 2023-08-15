module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.(jpg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8000,
            filename: '[name].[ext]',
            output: 'images',
          },
        },
      },
    ],
  },
};
