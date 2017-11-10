import React from 'react';
import ReactDOM from 'react-dom';


const template = React.createElement('p', {}, 'testing');

const template2 = <p>Testing</p>;
ReactDOM.render(template2, document.getElementById('app'));