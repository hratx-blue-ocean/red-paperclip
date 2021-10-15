module.exports = {
  entry: {
    feed: './client/src/Feed.Index.js',
    profile: './client/src/Profile.Index.js',
    admin: './client/src/Admin.Index.js',
    chat: './client/src/Chat.Index.js',
  },
  output: {
    filename: '[name]/bundle.js',
    path: `${__dirname}/client/dist`,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(m?js$|m?jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
};
