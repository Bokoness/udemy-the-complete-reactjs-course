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

/* A demo that shoes how react rendering works 
    - everytime the state is changed react is rerender elements
    - just like we are doing here with renderCounterApp()
*/

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );

    //takes 2 args, 1: the element to render, 2 the container element in html file
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
