import React from 'react';

import classes from'./Card.module.css';

const Card = (props) => {
  return (
    // dynamic render the className of Card, input classname from AddUser.js
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  )
}

export default Card;