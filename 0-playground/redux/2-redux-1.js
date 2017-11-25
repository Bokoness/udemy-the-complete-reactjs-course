import {createStore} from 'redux';

//5th step:
//Action generator - functions that return action objects
    //payload - the increment value we want to increment, default is empty object{}
const incrementCount_without_destructuring = (payload = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1 //if payload have value - increment value, else, increment by 1
    };
};
//incrementBy with destrcutoring (just like the function above)
    //if arg is an object but empty - set it to 1
    //if there is no arg - set it to empty object
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count = 1}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

/* 1 - first step: creating a REDUCER
    createStore args:
        - function - with the wanted states
        - action - an object containning all the actions dispatch() that send to store
*/
const store = createStore((state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
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

//4th step
//store.subscrite(): watching the store and calling the arg function everytime
//there is a change in store
store.subscribe(() => {
    //.getState - return the current state
    console.log(store.getState());
})

/* 2nd step
    Actions:
        - change the redux store values
        - action is an object that send to the store
            - the action itself dont change the state, only dispatch an action to store
            - and in store we define how to change data when action name is comming

    3rd step:
    store.dispatch
        - send the action to the store
        - args:
            1st: type - a string that defines the action type. cannot be undefined
            2nd: dynamic information we pass to store (only if we want)
        - when using action generator:
            - store.dispatch call a function that returns the arguments above
            - that helps with spelling problems
*/

//without action generator
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5 //increment by 5
});
//with action generator
store.dispatch(incrementCount({incrementBy: 5}));

//without action generator
store.dispatch({
    type: "RESET"
});
//with action generator
store.dispatch(resetCount());

//without action generator
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10 //decrement by 10
});
//with action generator
store.dispatch(decrementCount({decrementBy: 10}));

//without action generator
store.dispatch({
    type: 'SET',
    count: 101 //set count to 101
});
//with action generator
store.dispatch(setCount({count: 10001}));
