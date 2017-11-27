import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import getVisibleExpenses from './selectors/expenses';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 400, createdAt: 1000}));
store.dispatch(addExpense({description: 'Gas bill', amount: 50, createdAt: 4500}));
store.dispatch(addExpense({description: 'Rent', amount: 5500, createdAt: 10000}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
