import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <span className="expense-item__price">
          $
          {props.amount}
        </span>
      </div>
    </div>
  );
}

export default ExpenseItem;
