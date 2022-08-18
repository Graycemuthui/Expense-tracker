import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2022, 4, 12),
  },
  {
    id: "e3",
    title: "Polaroid Camera",
    amount: 400.2,
    date: new Date(2021, 8, 3),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const addExpenseHandler = (expense) => {
    // updating the state when its based on an older snapshot of the same state
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<NewExpense onAddExpense={addExpenseHandler} />}
          />
          <Route path="/expenses" element={<Expenses items={expenses} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
