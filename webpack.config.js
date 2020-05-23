const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'

  return {
    entry: {
      pages: './src/pages/index.tsx',
    },
    output: {
      filename: '[name]-bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: isProduction ? false : 'source-maps',
    optimization: {
      minimizer: [
          new TerserPlugin(),
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: "[name]-style.css" }),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.s(a|c)ss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          test: /\.(svg|woff|woff2|ttf|eot)(\?.*$|$)/,
          loader: 'file-loader',
          options: {
              outputPath: 'fonts',
              name: '[name].[ext]'
          }
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    devServer: {
      publicPath: '/dist/',
      host: 'localhost',
      https: true,
      hot: true,
      compress: true,
      port: 3000,
    },
  };
}
