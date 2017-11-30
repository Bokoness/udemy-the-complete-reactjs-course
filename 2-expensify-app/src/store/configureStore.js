/**********************
**** Store creation ***
***********************/
import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
    //store with multiple reducers, using combine reducers
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }), /* preloadedState, */
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store
};

