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
, UglifyJSPlugin = require('uglifyjs-webpack-plugin')
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
    new ExtractTextPlugin('style.css')
  ]

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  // JS_LOADERS.unshift(WebpackStrip.loader('console.log'));
} else {
  // PLUGINS.push("react-hot-loader/babel");
}

// If environment is not Netlify
if (!process.env.NETLIFY) {
  PLUGINS.concat([
    // new BundleAnalyzerPlugin()
  ])
}

// Pass is prod into files
PLUGINS.push(
  new webpack.DefinePlugin({
    "IS_PROD": isProd
  })
)

const theme = {
  'primary-color': '#ff6f8f',
  'secondary-color': '#363e83',
  'link-color': '#ff6f8f',
}

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
      { test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?{minimize: true}', 'sass-loader']
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?{minimize: true}',
            `less-loader?{"javascriptEnabled": true, "sourceMap":true, "modifyVars":${JSON.stringify(theme)}}`
            //, "modifyVars":${JSON.stringify(theme)}
          ]
        }),
      },
      { test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
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
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
          },
          sourceMap: false,
          comments: false
        }
      })
    ]
  }
}