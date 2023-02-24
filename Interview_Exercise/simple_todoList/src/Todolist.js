import "./styles.css";
import Todoitem from "./Todoitem";

export default function Todolist(props) {
  return (
    <ul>
      {props.listArray.map((item, index) => (
        <Todoitem
          key={index}
          // why we need 'id' = index ? because 'key' can not be passed as props to child, key is a key word
          id={index}
          item={item}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
}
