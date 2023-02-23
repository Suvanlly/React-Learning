import "./styles.css";
import Todoitem from "./Todoitem";

export default function Todolist(props) {
  return (
    <ul>
      {props.listArray.map((item, index) => (
        <Todoitem
          key={index}
          id={index}
          item={item}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
}
