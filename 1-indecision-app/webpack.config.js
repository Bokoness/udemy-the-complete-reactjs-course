// const path = require('path');

// // entry -> output 
// module.exports = {
//     //tells webpack where it should start
//     entry: './src/app.js',
//     output: {
//         //the absolute path to the output file
//         path:  path.join(__dirname, 'public '),
//         filename: 'bundle.js'
//     }
// }

const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
};
