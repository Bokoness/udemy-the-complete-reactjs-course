const path = require('path');
//for fethcing the css files and dump them in specific directory
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  //env - a var that passed from package.json (with string production)
  //we use it so we can manipulate webpack different for production
  console.log('env:' ,env)
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './2-expensify-app/src/app.js',
    output: {
      path: path.join(__dirname,'2-expensify-app', 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname,'2-expensify-app', 'public'),
      historyApiFallback: true ,//the react-route will be incharge of routing and not devserver
      //optional - if assets file (.css, .js) lives in another folder then public, add that folder to public path
      publicPath:'/dist/'
    }
  }
}

