import "./styles.css";

export default function Todoitem(props) {
  const handleClickFn = () => {
    props.onDelete(props.id);
  };
  return (
    <li
      className="App"
      onClick={handleClickFn}
      style={{ marginBottom: "20px" }}
    >
      {props.item}
    </li>
  );
}
