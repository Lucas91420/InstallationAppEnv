const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {

  entry: './src/index.js',


  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  
  mode: 'development',

 
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
    hot: true  
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',  
          'css-loader',    
          'sass-loader' 
        ]
      }
    ]
  },


  plugins: [
    new ESLintPlugin({
     
      context: 'src',
      extensions: ['js'],
      eslintPath: 'eslint/use-at-your-own-risk'
    })
  ]
};

