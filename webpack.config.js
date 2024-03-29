const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd
console.log(isProd)

const filename = (ext) => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-proposal-class-properties']
      },
    },
  ];
  if (isDev) {
    loaders.push('eslint-loader')
  }

  return loaders
}
const distPath = path.join(__dirname, '..', 'jewerly-server', 'public')
module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfilL', './index.js'],
  output: {
    filename: filename('js'),
    path: distPath,
  },
  resolve: {
    extensions: ['.js', '.scss'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/core'),
    },
  },
  devtool: isDev ? 'source-map' : false,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    hot: isDev,
  },
  target: isDev ? 'web' : ['web', 'es5'],
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: 'index.html',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd,
      },
    }),
    new CopyPlugin({
      patterns: [
        {from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(distPath)},
        {from: path.resolve(__dirname, 'src/img'),
          to: path.resolve(distPath, 'img')},
        // {from: path.resolve(__dirname, 'src/server'),
        //   to: path.resolve(__dirname, 'dist/server')}
      ]
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          'css-loader',
          'sass-loader',
        ],
      }, // css
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['url-loader']
      }, // files

      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      }, // js

    ],
  },
}
