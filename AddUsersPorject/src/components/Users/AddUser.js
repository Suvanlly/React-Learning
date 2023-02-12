import React, {useState} from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState(false);

  const submitUserHandler = (e) => {
    // prevent the page reloading when click submit
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age'
      })
      // return nothing means don't need to console log or reset the input field
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age'
      })
      return;
    }
    console.log(enteredUsername, enteredAge)
    // lift states up to app.js when user click submit button
    props.onAddUser(enteredUsername, enteredAge)
    // it won't reset the input values unless you add value to input
    setEnteredAge('');
    setEnteredUsername('');
  }
  const inputNameHandler = (e) => {
    setEnteredUsername(e.target.value);
  }
  const inputAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  }

  // Pass this function as props to ErrorModal component
  const errorHandler = () => {
    setError(false);
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onCloseModal={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={submitUserHandler}>
          <label htmlFor='username'>Username</label>
          <input id="username" type="text" value={enteredUsername} onChange={inputNameHandler}/>
          <label htmlFor='age'>Age</label>
          <input id="age" type="number" value={enteredAge} onChange={inputAgeHandler}/>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser;