import substract, {square, add} from './utils';
import isSenior, {isAdult, canDrink} from './person';

//importing 3rd party modules
import validator from 'validator'; //without ./ becuse its not a relative path, only the module name.  

console.log('app.js');

console.log('----Utils----');
console.log('substract from utils:', substract(10, 5));
console.log('square from utils:' , square(5));
console.log('add from utils: ', add(5, 5));

console.log('---- Person -----');
console.log('isAdult from person:', isAdult(19) );
console.log('canDrink from person:', canDrink(19));
console.log('isSenior from person:', isSenior(65));

//======== third party modules =========/
console.log('======= Third party modules ==========');
console.log('validator module:');
console.log(validator.isEmail('test'));

