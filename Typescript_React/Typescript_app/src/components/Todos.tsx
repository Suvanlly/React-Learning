import React from 'react';
import Todo from '../data_models/todo';
import TodoItem from './TodoItem';

// This type anotation is Generics
const Todos: React.FC<{ items: Todo[], onDeleteTodo: (listItemId: string) => void }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem listItem={item} onDelete={props.onDeleteTodo}/>
      ))}
    </ul>
  );
}

export default Todos;