//WP version 3.1.0

const path = require('path');

module.exports = {
    //entry point - starting point
    entry: './src/app.js',
    //output file (all bundle files in one)
    output: {
        //the path to output file, the path have to be ABSOLUTE
        path: path.join(__dirname, 'public'),
        //output file name
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            //loader rule: the package we want to use
            loader: 'babel-loader',
            //run babel on all .js files - using regex
            test: /\.js$/,
            //exluding the js files in node_modules
            exclude: /node_modules/
        }, {
        //setting up webpack to work with css or scss files
            test: /\.s?css$/,
            //use: when we want to use more then one loader
            use: [
                'style-loader',
                'css-loader',
                'sass-loader' // a package that compile scss to css
            /*summary: when babel see .scss file:
                - it will use sass-loader to compile it to css file
                - it will use style-loader and css-loader packages to load css file to the dom    
            */
            ]
        }]
    },
    /* webpack devtool - source map:
         - when having an error in browser dev-tool - instead of refference to bundle long file, it will refference to the the exact file we created
    */
    devtool: 'cheap-module-eval-source-map',
    
    /* webpack devserver: (just like live-server, only via webpack)
        - first we need to install it via yarn or npm : yard add webpack-dev-server
        - important! webpack devserver dont serve the bundle.js file. 
            - if we do want to see the bundle.js file, we need to run a script (from package.json) that runs bundle webpack without the devServer
    */
    devServer: {
        //the root the contains the files for webpack
        contentBase: path.join(__dirname, 'public')
    }
};
