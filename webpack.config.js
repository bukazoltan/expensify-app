const path = require('path');
const public = path.join(__dirname, 'public');

module.exports = {
  entry: './src/playground/redux-expensify.js',
  output: {
    path: public,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: public,
    historyApiFallback: true
  }
};
