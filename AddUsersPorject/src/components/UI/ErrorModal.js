import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  const handleErrorModal = () => {
    // This function passed from AddUser.js, click "Okay" to call this function
    props.onCloseModal();
  }

  return (
    <>
      <div className={classes.backdrop} onClick={props.onCloseModal}/>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={handleErrorModal}>Okay</Button>
        </footer>
      </Card>
    </>
  )
}

export default ErrorModal;