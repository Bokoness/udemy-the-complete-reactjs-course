'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'hey',
    options: ['One', 'Two']
};

//JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'here are your options' : 'No Options'
    )
);

var appRoot = document.getElementById('app');

//takes 2 args, 1: the element to render, 2 the container element in html file
ReactDOM.render(template, appRoot);
