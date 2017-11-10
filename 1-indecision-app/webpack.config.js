const path = require('path');

module.exports = {
    //entry point - starting point
    entry: './src/app.js',
    //output file (all bundle files in one)
    output: {
        //the parth to output file
        path: path.join(__dirname, 'public'),
        //output file name
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            //run babel on all .js files - using regex
            test: /\.js$/,
            //exluding the js files in node_modules
            exclude: /node_modules/
        }]
    }
};
