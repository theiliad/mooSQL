const webpack = require('webpack')
, path = require('path')
, HtmlWebpackPlugin = require('html-webpack-plugin')
, HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body'
  })
, WebpackStrip = require('webpack-strip')  
, JS_LOADERS = ['babel-loader']
, ExtractTextPlugin = require("extract-text-webpack-plugin")
, CopyWebpackPlugin = require('copy-webpack-plugin')
, SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
// , BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
, PLUGINS = [
    HtmlWebpackPluginConfig,
    new webpack.optimize.ModuleConcatenationPlugin(),      
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new CopyWebpackPlugin([
      {
        from: './public'
      }
    ], {context: '.'}),
  ]

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  // JS_LOADERS.unshift(WebpackStrip.loader('console.log'));

  PLUGINS.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false,
      },
      sourceMap: false,
      comments: false
    })
  );
} else {
  // PLUGINS.push("react-hot-loader/babel");
}

// If environment is not Netlify
if (!process.env.NETLIFY) {
  PLUGINS.concat([
    new SimpleProgressWebpackPlugin(),
    // new BundleAnalyzerPlugin()
  ])
}

// Pass is prod into files
PLUGINS.push(
  new webpack.DefinePlugin({
    "IS_PROD": isProd
  })
)

// const theme = {
//   'primary-color': '#203160',
//   'secondary-color': '#6ecce0',
//   'link-color': '#203160',
// }

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
          test:/\.js$/,
          loaders: JS_LOADERS,
          exclude: /node_modules/
      },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ], exclude: /node_modules/ },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          `less-loader?{"javascriptEnabled": true, "sourceMap":true}`
          //, "modifyVars":${JSON.stringify(theme)}
        ]
      },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ], exclude: /node_modules/ },
      { test: /\.(png|jpg|svg|gif|woff|woff2|ttf|eot)$/, loader: 'url-loader?limit=25000' }
    ]
  },
  plugins: PLUGINS,
  devServer: {
    port: 8080,
    proxy: isProd ? undefined : {
        '/api/**': {
            target: '',
            changeOrigin: true
        }
    },
    historyApiFallback: true
  },
}