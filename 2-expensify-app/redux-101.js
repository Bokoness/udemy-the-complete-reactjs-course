import {createStore} from 'redux';

/*
    createStore args:
        - function - with the wanted states
        - action - an object containning all the actions dispatch() that send to store
*/
const store = createStore((state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'SET': 
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
});

//store.subscrite(): watching the store and calling the arg function everytime
//there is a change in store
store.subscribe(() => {
    //.getState - return the current state
    console.log(store.getState());
})

/*
    Actions:
        - change the redux store values
        - action is an object that send to the store
            - the action itself dont change the state, only dispatch an action to store
            - and in store we define how to change data when action name is comming

    store.dispatch
        - send the action to the store
        - args:
            1st: type - a string that defines the action type. cannot be undefined
            2nd: dynamic information we pass to store (only if we want)
*/

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5 //increment by 5
});

store.dispatch({
    type: "RESET"
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10 //decrement by 10
});

store.dispatch({
    type: 'SET',
    count: 101 //set count to 101
});
