const path = require('path');
const CopyWebpack = require('copy-webpack-plugin');

module.exports = {
  plugins:[
    new CopyWebpack({
      patterns: [
        {
          from : './*.html'
        },
        {
          from : './*.css'
        }
      ],

    })
  ],
  entry: './main.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};