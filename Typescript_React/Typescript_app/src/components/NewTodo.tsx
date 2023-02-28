import React, { useRef } from "react";

const NewTodo: React.FC<{onAddTodo: (text: string) => void }> = (props) => {
  // The initial value null must be provided
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  // FormEvent is a special Event Object Type when listening to form submission
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // '?.' is for TS not find a value yet, it will return Null (can avoid error)
    // '!.' is for TS to know we are sure it can't be Null
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText?.trim().length === 0) {
      // throw an error
      return;
    }

    props.onAddTodo(enteredText);
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type='text' id="text" ref={todoTextInputRef}/>
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo;