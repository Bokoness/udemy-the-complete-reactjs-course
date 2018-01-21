/**********************
** Action generators **
***********************/

import uuid from 'uuid'; //creating a qunique id

export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

//redux dispatching function only via the redux-thunk extention
export const startAddExpense = () => {
    return (dispatch) => {
        
    };
};

export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});