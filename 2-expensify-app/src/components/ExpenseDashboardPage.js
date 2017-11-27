import React from 'react';
import ExpenseList from './ExpensList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = (props) => {
    console.log(props);
    return (
        <div>
            <ExpenseListFilters/>
            <ExpenseList/>
        </div>
    )
}

export default ExpenseDashboardPage;