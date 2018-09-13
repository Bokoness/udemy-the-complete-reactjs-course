# React Course
================

## Dependencies 

### Develpoment Modules  (npm -i --save-dev)

###### Webpack

        1. webpack
        2. webpack-dev-server  (a live server)
        3. webpack-cli

###### Babel

        1. babel-loader
        2. babel-core 
        3. babel-preset-react 
        4. babel-preset-env

###### CSS loaders
        
        1. css-loader 
        2. style-loader

### Production Modules (npm -i --save)
###### ReactJS
        1. react
        2. react-dom 
        3. react-router-dom

## Webpack 

### Entry

    * Webpack needs an entry point, the main component of the app
    * Multiple entry points are possible

### Loaders 
    * Loader are apply on high levels of the app
    * Loaders can manipulate all JS file for example (babel-loader)
    * Loader can manipulate all CSS files (css-loader)

### Plugins
    * While Loaders apply on the high levels of the app, plugins are apply on the components, and their are executed after the loaders did their job

### Output

    * the output of the bundled files, concatenated into one file

### Setting up Webpack configurations

    * in package.json file - add "start": "webpack-dev-server" to "script"
    * add webpack.config.js file and configure it
        * all the code is written inside: "module.exports = {}"
        * entry: './src/index.js' the main js file
        * resolve: adding default files extentions, so if there is a file without file extentions - it will use the default ones. 
### webpack.config.js - simple exmaple

```javascript
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
                //loader rule: the package we want to use
                loader: 'babel-loader',
                //run babel on all .js files - using regex
                test: /\.js$/,  //regex - the $ means the it ends with js
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
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true//the react-route will be incharge of routing and not devserver
        }
    };
```

### Setting up babel

    * create .babelrc file in root folder

```javascript
{
    "presents": [
        ["env", { 
            "targets" : {
                "browsers": [ 
                    "> 1%",
                    "last 2 versions"
                ]
            }
        }], 
        "react"
    ]
}
```