/**********************
**** Store creation ***
***********************/
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPSE__ || compose;

export default () => {
    //store with multiple reducers, using combine reducers
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }), /* preloadedState, */
        composeEnhancers(applyMiddleware(thunk))
    );
    return store
};

