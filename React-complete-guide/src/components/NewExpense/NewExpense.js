import React from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'


const NewExpense = (props) => {
  const getExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData
    }
    // call function from App.js to pass expense data to parent
    props.onAddExpense(expenseData)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onGetExpenseData={getExpenseDataHandler} />
    </div>
  )
}

export default NewExpense;