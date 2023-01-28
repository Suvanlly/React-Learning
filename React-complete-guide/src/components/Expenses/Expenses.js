import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState(2021);
  const expensesArray = props.items;

  // Filter year data get from expense filter
  const getFilterYearHandler = (filterYear) => {
    // console.log(filterYear);
    setFilterYear(filterYear);
  };
  const newExpensesArray = expensesArray.filter(
    (item) => item.date.getFullYear() === filterYear
  );
  // console.log(newExpensesArray)

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onGetFilterYear={getFilterYearHandler}
      />
      <ExpensesList filteredExpenses={newExpensesArray}/>
    </div>
  );
}

export default Expenses;
