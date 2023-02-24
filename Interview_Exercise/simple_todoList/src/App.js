import { useState } from "react";
import "./styles.css";
import Todolist from "./Todolist";

export default function App() {
  const [enteredValue, setEnteredValue] = useState();
  const [listArray, setListArray] = useState([]);

  const handleInput = (e) => {
    setEnteredValue(e.target.value);
  };

  const handleButtonClick = () => {
    setListArray([enteredValue, ...listArray]);
    setEnteredValue("");
  };

  const handleDeleteFn = (indexOfItem) => {

    const newArray = [...listArray];
    // this line contains deleted item
    newArray.splice(indexOfItem, 1);
    // now newArray contain rest of items
    setListArray(newArray);


    // THIS WORKS!
    
    // const NewListArray = listArray.filter(
    //   (item) => item !== listArray[indexOfItem]
    // );
    // setListArray(NewListArray);

      
    // THIS WILL NOT WORK!!!
    // We should avoid mutating your state 'listArray' directly. You should create a new Array

    // listArray.splice(indexOfItem, 1); 
    // setListArray(listArray);

  };
  return (
    <>
      <div className="App">
        <input onChange={handleInput} value={enteredValue} />
        <button onClick={handleButtonClick}>Add list</button>
      </div>
      <Todolist listArray={listArray} onDelete={handleDeleteFn} />
    </>
  );
}
