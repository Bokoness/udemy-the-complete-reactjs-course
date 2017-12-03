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

/**********************
 ** Firebase Arrays ***
 **********************/
//push() - 'generates a value with id'
const database = firebase.database();

// database.ref('notes').push({
//     body: 'Go for a run',
//     title: "To Do"
// })

// database.ref('notes').push({
//     body: 'React Native, Angular, Python',
//     title: "Course Topics"
// })

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 1800,
//     createdAt: 123123
// })

// database.ref('expenses').push({
//     description: 'Gas',
//     note: '',
//     amount: 2000,
//     createdAt: 123123
// })

//fetching data from firebase and convert it to an array (once)
database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
            expenses.push({
                //.key - the name of the property
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        })
        console.log(expenses)
    })

//everytime data in expenses is changed - will recreate array for storing expenses data
database.ref('expenses')
    .on('value', (snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
            expenses.push({
                //.key - the name of the property
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        })
        console.log(expenses)
    })

//.on('child_removed') event: triggers when a child is deleted
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//.on('child_changed) event: triggers when a child is updated
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//.on('child_added') event: triggers when a child is added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});


