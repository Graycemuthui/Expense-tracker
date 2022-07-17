import React from 'react';
import './ExpensesFilter.css';

/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */
const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
