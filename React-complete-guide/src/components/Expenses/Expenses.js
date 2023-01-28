import React, { useState } from 'react'
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2019');
  const getFilterYearHandler = (filterYear) => {
    // console.log(filterYear);
    setFilterYear(filterYear);
  }

  return (
    <div className="expenses">
      <ExpensesFilter selected={filterYear} onGetFilterYear={getFilterYearHandler}/>
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id} 
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
      {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
      <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
      <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
      <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/> */}
    </div>
  )
}

export default Expenses;