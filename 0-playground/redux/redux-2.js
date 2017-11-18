//Same exmaple as redux-1, only without comments, the reducer is a function that passed to the createStore()

import {createStore} from 'redux';

const incrementCount_without_destructuring = (payload = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
    };
};

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

/*
    Reducer rules
    1. Reducers are pure functions
    2. Never change state or action
        - return a new state with the new data
*/

const countReducer = (state = {count: 0}, action) => {
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
}
//pass the Reducers to createStore
const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 10001}));
