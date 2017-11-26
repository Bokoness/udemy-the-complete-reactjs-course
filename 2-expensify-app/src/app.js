import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import getVisibleExpenses from './selectors/expenses';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';

const store = configureStore();

const waterBill = store.dispatch(addExpense({description: 'Water bill', amount: 400, createdAt: -100}));
const gasBill = store.dispatch(addExpense({description: 'Gas bill', amount: 50, createdAt: 100}));
store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses)






console.log(store.getState());

ReactDOM.render(<AppRouter/>, document.getElementById('app'));
