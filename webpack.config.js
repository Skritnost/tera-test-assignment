const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, 'app/app.module.ts'),
    vendor: [
      'ng-droplet',
    ],
  },
  output: {
    filename: '[name]-bundle.js',
    path: '/',
    pathinfo: true,
    sourceMapFilename: '[name].js.map'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 8000,
    compress: true
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './app/app.template.html',
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: ["node_modules"],
    descriptionFiles: ['package.json'],
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  }
};
