/***************************
 ** Object Destructuring ***
 ***************************/
console.log("** Object Destructuring **");

const person = {
    name: "Ness",
    age: 32,
    location: {
        city: "Ateret",
        temp: 32
    }
};

//without destructuring
const oldName = person.name;
const oldAge = person.age;
console.log(`${oldName} is ${oldAge}.`);

//with destructuring
const {name, age} = person;
console.log(`${name} is ${age}.`);

//without destructuring
if(person.location.city && person.location.temp) {
    console.log(`It's ${person.location.temp} in ${person.location.city}`);
}

//with destructuring
const {city, temp} = person.location;
if(city && temp) {
    console.log(`It's ${temp} in ${city}`);
}

//renaming the destructing variable names:
const {temp: temperature} = person.location; //fetching name from person and rename it
console.log(temperature);

//default variable in destructuring
const {hobby = "Torah"} = person; //grab hobby from person, but if its not defined - give it a blue of "Torah"
console.log(hobby);

const {hobby: myHobby = "Coding"} = person; //grab hobby from person and save it to myHobby variable. if hobby is not define in person, give it a vlue of "Coding";
console.log(myHobby);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {publisher: publisherName = "Self-Published"} = book.publisher;
console.log(publisherName);

/***************************
 *** Array Destructuring ***
 ***************************/
console.log("** Array Destructuring **");

const address = ["Ma'ale Efraim 35" , "Ateret", "Israel", "90805"];
//Without array destructuring
console.log(`You are in ${address[1]} ${address[2]}`);

//With array destructuring
const [street, city2, state, zip, notExists = "default"] = address; //street is the first value of array, city is the second etc... the 5th var is not exist so it will give it default value of "default";
console.log(`You are in ${city2} ${state}`);
console.log(notExists);

//fetching only the 3rd value from array
const [, , x] = address;
console.log(x);

//another example

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(itemName, mediumPrice);

//destrucuring in functions
const add = ({a, b}, c) => {
    return a + b + c;
};

console.log(add({a:1, b:2}, 100));