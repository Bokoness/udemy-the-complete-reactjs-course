import {createStore, combineReducers} from 'redux';

const demoState = {
    expenses: [{
        id: 'sadfkjlsdfhasdf',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amout: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // data or amount
        startDate: undefined,
        endDate: undefined
    }
};




