/****************
 **** Arrays ****
 ****************/
//return a new array

let arr = ['Yael'];

//adding to the front:
console.log(...arr, 'Geffen');

//adding before value
console.log('Ness', ...arr);

//adding before and after
console.log('Ness', ...arr, 'Geffen');

/****************
 *** Objects ****
 ****************/
// return a new object only spreaded one
 const user = {
     name: 'Ness',
     age: 32
 };

 //spreading the object
 console.log({...user});

 //adding data to the end
 console.log({
     ...user,
     location: 'israel',
     age: 103 //override age property(works only on the end of the object)
 })

 //adding to the beginning of the object
 console.log({
     location: 'israel',
     ...user,
     age: 103
 })
