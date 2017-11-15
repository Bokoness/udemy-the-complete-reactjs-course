import {createStore} from 'redux';

/*
    createStore args:
        - function - with the wanted states
        - action - an object containning all the actions dispatch() that send to store
*/
const store = createStore((state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
});

console.log(store.getState());

/*
    Actions:
        - change the redux store values
        - action is an object that send to the store
            - the action itself dont change the state, only dispatch an action to store
            - and in store we define how to change data when action name is comming

    store.dispatch
        - send the action to the store
*/

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: "RESET"
});

store.dispatch({
    type: 'DECREMENT'
});



//.getState - return the current state
console.log(store.getState());