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

const database = firebase.database();

export { firebase, database as default };