import Todo from "../data_models/todo";

const TodoItem: React.FC<{ listItem: Todo, onDelete: (listItemId: string) => void }> = (props) => {

  const onClickHandler = () => {
    props.onDelete(props.listItem.id)
  }


  return (
    <li key={props.listItem.id} onClick={onClickHandler}>{props.listItem.text}</li>
  )
}

export default TodoItem;