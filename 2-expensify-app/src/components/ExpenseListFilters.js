import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter} from '../actions/filters';
import {sortByDate, sortByAmount} from '../actions/filters';
const ExpenseListFilters = (props) => (
    <div>
        <input
            type="text"
            value={props.filters.text}
            onChange={(e) => {
                //dispatch action is get passes by redux as props
                props.dispatch(setTextFilter(e.target.value))
            }}
        />
        <select
            onChange={(e) => {
                if(e.target.value === 'amount')
                    props.dispatch(sortByAmount());
                else if (e.target.value === 'date')
                    props.dispatch(sortByDate())
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};
export default connect(mapStateToProps)(ExpenseListFilters);