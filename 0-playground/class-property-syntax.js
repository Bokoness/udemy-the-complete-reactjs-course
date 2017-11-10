/*
    ----- Class property syntax -------

    - babel plugin that add features to Class property
    - we can use arrow function as class properties (instead of the regular method type)
        - the advantage is we dont need to bind this to the methods, arrow function avoid that as we can see in the example below
    - documentation: 
        - http://babeljs.io/docs/plugins/preset-stage-2/

     installation: 
        - first we need to install this module via npm or yarn:
            - yarn add babel-plugin-transform-class-properties
        - then we need to add it to .babelrc file: 
            {
                "presets": [
                    "env",
                    "react"
                ],

                ====== HERE=======
                "plugins": [
                    "transform-class-properties"
                ]
            }
*/

import React from 'react';
import ReactDom from 'reactDOM';

// ========== Old syntax ============
console.log('======== Old syntax ========');
class OldSyntax {
    constructor() {
        this.name = 'Ness';
        this.getGreetings = this.getGreetings.bind(this);
    }

    getGreetings() {
        return `Hi, my name is ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
const getGreetings = oldSyntax.getGreetings;
console.log(getGreetings());


//----------- Class property syntax -----------//
console.log('======== Class property syntax ========');

class NewSyntax {
    name = 'yael';
    getGreetings = () => `Hi my name is ${this.name}`
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreetings;

console.log(newGetGreeting);