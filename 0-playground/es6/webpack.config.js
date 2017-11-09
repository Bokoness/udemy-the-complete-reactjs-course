const path = require('path');

/*
  webpack:
    1. we need to export the webpack moudle/
    2. the module need to contain 2 important pices: 
      1 - the enrty point, the main input file
      2 - the output point, then bundled file
*/ 
module.exports = {
  //tells webpack where it should start
  entry: './src/app.js',
  output: {
    //the absolute path to the output file
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
};
