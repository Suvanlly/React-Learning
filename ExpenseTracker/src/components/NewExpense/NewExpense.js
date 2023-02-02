import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isShowForm, setIsShowForm] = useState(false);

  const getExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    // call function from App.js to pass expense data to parent
    props.onAddExpense(expenseData);
    // setIsShowForm(false)
  };

  const cancelExpensesForm = () => {
    setIsShowForm(false);
  }

  return (
    <div className="new-expense">
      {isShowForm ? (
        <ExpenseForm onGetExpenseData={getExpenseDataHandler} onCancelForm={cancelExpensesForm}/>
      ) : (
        <button onClick={() => setIsShowForm(true)}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
