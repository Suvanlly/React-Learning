import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // using one object combined all the states together.
  // const [userInput, setUserInput] = useState({enteredTitle: '', enteredAmount: '', enteredDate: ''});

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput({...userInput, enteredTitle:event.target.value}); method 1
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value}; method 2
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // This is not good enough, sometimes not the latest state
    // setUserInput({...userInput, enteredAmount:event.target.value}); 

    // this way is safer, always give you the latest previous state
    // setUserInput((prevState) => {
    //   return {...prevState, enteredAmount: event.target.value};
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    // prevent form being submitted
    event.preventDefault();

    const expenseData = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: enteredAmount,
      // amount: +enteredAmount is better cuz sometimes the values added are string not numbers when adding multiple values
      date: new Date(enteredDate)
    };
    // console.log(expenseData);
    // Lift state(expense data) up to the NewExpense component
    props.onGetExpenseData(expenseData);
    // reset the value of input after user click submit
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return(
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min="2019-01-01" step="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancelForm}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )       
}

export default ExpenseForm;