import {createStore} from 'redux';

/*
    createStore args:
        - function - with the wanted states
*/
const store = createStore((state = {count: 0}) => {
    return state;
});

//.getState - return the current state
console.log(store.getState());