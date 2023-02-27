import React from 'react';
import Todo from '../data_models/todo';
import TodoItem from './TodoItem';

// This type anotation is Generics
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem listItem={item}/>
      ))}
    </ul>
  );
}

export default Todos;