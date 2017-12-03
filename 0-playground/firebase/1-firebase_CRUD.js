//connecting firebase to app
import * as firebase from 'firebase';

//copied from firebase website
const config = {
    apiKey: "AIzaSyB1kWabfPtzr_iSYn5RqttKglMKTLN-eM8",
    authDomain: "udemy-reactjs-course-2d939.firebaseapp.com",
    databaseURL: "https://udemy-reactjs-course-2d939.firebaseio.com",
    projectId: "udemy-reactjs-course-2d939",
    storageBucket: "udemy-reactjs-course-2d939.appspot.com",
    messagingSenderId: "333598967348"
};

firebase.initializeApp(config);

/* firebase.database():
        - ref: like a collection - the data location we want to manipulate
            - args: the name of the collection
                - when called without args - will store data into root
        - set(): stores data, can store any type of data (no need for root object)
            - database.ref().set('hello world') - will store string into root
*/

/**********
 ** Set ***
 **********/

const database = firebase.database();
//setting data to root
database.ref().set({
    name: 'Ness Bokobza',
    age: 26,
    stressLevel: 6,
    job: {
        title: 'Software Developer',
        company: 'Google'
    },
    isSingle: false,
    location: {
        city: 'Ateret',
        country: 'Israel'
    },
    children: ['Geffen', 'Oz', 'Bnaya']
}).then(() => {
    console.log('Data is saved');
}).catch((error) => {
    console.log('This faild: ', error);
});

//setting data to 'age' collection:
database.ref('age').set(27);
//setting data to second level in database
database.ref('location/city').set('Pardes Hana Karkur');

//setting up new collection to root
database.ref('attributes').set({
    height: 1.72,
    weight: 76
}).then(() => {
    console.log('Data is saved')
}).catch((e) => {
    console.log('This faild!: ', e);
})

/************
 ** Remove **
 ************/
//remove isSingle from firebase
database.ref('isSingle').remove()
    .then(() => console.log('Removed!'))
    .catch((e) => console.log('Remove faild: ', e.message));

//another way to remove data
    // passing null to set()
//removing age from firebase
database.ref('age').set(null);

/************
 ** Update **
 ************/
/*
    - to update 1 peice of data - we can use the set() command and it will update
    - the update method use to update multiple peices of data
        - thats why update({}) should always accept an object as a param
    - when updating nested property (like: location/country): firebase won't update the specific property we choose, it will insert a whole new property instead
        - if we want to update just a specific nested property we need to use the following syntax:
            - 'location/city': "Mevaseret Zion"
*/
//updating all database
database.ref().update({
    name: 'Yael',
    //adding new properties with update
    lastName: 'Bokobza',
    //will replace all the job's netsted object with a single string
    job: 'Teacher',
    //updating nested property
    'location/city': "Shoham",
    //delete data with update, via passing null to property
    children: null
});

database.ref().update({
    stressLevel: 9,
    job: {
        title: 'software developer',
        company: 'Amazon'
    },
    location: {
        country: 'Israel',
        city: 'Mevaseret Zion'
    }
})

/****************
 ** Fetch data **
 ****************/

 //once() - fetching data a single time
 database.ref('location/city')
    .once('value')
    .then ((snapshot) => {
        const val = snapshot.val();
        console.log('once: ', val);
    })
    .catch((e) => {
        console.log('Error fetching data', e)
    })

//on() - fetching data and listenning to DB everytime an event is trigger
    // the 'value' event rerenders function everytime data is changed
database.ref().on('value', (snapshot) => {
    console.log('on(): ', snapshot.val());
})
//off() - the opposite of on(): stop listenning to an event