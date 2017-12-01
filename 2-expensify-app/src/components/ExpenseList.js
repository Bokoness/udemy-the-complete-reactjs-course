import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => (
            <ExpenseListItem
                key={expense.id}
                description={expense.description}
                createdAt={expense.createdAt}
                amount={expense.amount}
                id={expense.id}
            />
        ))}
    </div>
);

const mapStateToProps = (state) => {
    return {
        //to expenses props - use the selectExpenses method that filters the expenses
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
