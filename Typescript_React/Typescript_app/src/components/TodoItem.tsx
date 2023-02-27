import Todo from "../data_models/todo";

const TodoItem: React.FC<{listItem: Todo}> = (props) => {
  return (
    <li key={props.listItem.id}>{props.listItem.text}</li>
  )
}

export default TodoItem;