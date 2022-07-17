import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */
const ExpenseItem = (props) => (
  <Card className="expense-item">
    <ExpenseDate date={props.date} />
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <span className="expense-item__price">
        $
        {props.amount}
      </span>
    </div>
  </Card>
);

export default ExpenseItem;
