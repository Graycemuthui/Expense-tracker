import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (eneteredExpenseData) => {
    const expenseData = {
      ...eneteredExpenseData,
      id: Math.random().toString(),
    };
    /* eslint-disable  react/destructuring-assignment */
    /* eslint-disable react/prop-types */
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
      <form />
    </div>
  );
};

export default NewExpense;
