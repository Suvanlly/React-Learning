import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState(2021);
  const expensesArray = props.items;

  const getFilterYearHandler = (filterYear) => {
    // console.log(filterYear);
    setFilterYear(filterYear);
  };
  const newExpensesArray = expensesArray.filter(
    (item) => item.date.getFullYear() === filterYear
  );
  // console.log(newExpensesArray)
  let expensesContent = <p>No expenses found!</p>;

  if (newExpensesArray.length > 0) {
    expensesContent =  newExpensesArray.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ))
  }

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onGetFilterYear={getFilterYearHandler}
      />
      {expensesContent}
      {/* {newExpensesArray.length === 0 ? (
        <p>No Expense found!</p>
      ) : (
        newExpensesArray.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      )} */}
    </div>
  );
}

export default Expenses;
