import React, {useState} from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const addUserHandler = (e) => {
    // prevent the page reloading when click submit
    e.preventDefault();
    // console.log(enteredUsername, enteredAge)
  }
  const inputNameHandler = (e) => {
    setEnteredUsername(e.target.value);
  }
  const inputAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  }


  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id="username" type="text" onChange={inputNameHandler}/>
        <label htmlFor='age'>Age</label>
        <input id="age" type="number" onChange={inputAgeHandler}/>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser;