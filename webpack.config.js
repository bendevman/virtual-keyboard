const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV ?? 'development';

module.exports = {
  mode,
  entry: {
    index: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name][contenthash:4].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name][contenthash:4].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot)$/i,
        exclude: [/img/],
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        exclude: [/fonts/],
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        },
      },
    ],
  },
  // devtool: "source-map",
  devServer: {
    // hot: true,
    // compress: true,
    watchFiles: path.join(__dirname, './src'),
    port: 8888,
  },
};
