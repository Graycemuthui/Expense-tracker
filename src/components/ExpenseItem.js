import './ExpenseItem.css';
import PropTypes from 'prop-types';

/* eslint-disable react/prop-types */
function ExpenseItem(props) {
  const { date, title, amount } = props;
  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <span className="expense-item__price">
          $
          {amount}
        </span>
      </div>
    </div>
  );
}

export default ExpenseItem;

ExpenseItem.prototype = {
  date: PropTypes.number,
  title: PropTypes.string,
  amount: PropTypes.number,
};
