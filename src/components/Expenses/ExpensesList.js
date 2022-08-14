import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */
const ExpensesList = (props) => {
  /* eslint-disable no-param-reassign */
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  console.log(props.items[0]);
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
