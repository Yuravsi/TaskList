const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};