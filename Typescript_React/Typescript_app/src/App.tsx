import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./data_models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Hardcoded Todo List items
  // const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const deleteTodoHandler = (listItemId: string) => {
    setTodos((prevTodos) =>
      prevTodos.filter((listItem) => listItem.id !== listItemId)
    );
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
