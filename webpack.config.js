var webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = env => {
  console.log(env);
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
        {
          test: /\.css/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader'],
        },
        {
          test: /\.(pdf|jpg|png|gif|svg|ico)$/,
          use: [
            {
              loader: 'url-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html',
      }),
      new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(env.NODE_ENV),
      }),
    ],
    devServer: {
      // port: 3001,
      host: '0.0.0.0',
      historyApiFallback: true,
    },
  };
};
