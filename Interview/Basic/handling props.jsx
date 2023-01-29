// Render the following component with props
<Student Info name="Vicky" rollNumber="23" />;

// Function component: any prop provided as an argument to a functional component can be directly used inside HTML elements
function StudentInfo(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.rollNumber}</h2>
    </div>
  );
}

// Class component: props need to use this keyword to handle
class StudentInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.rollNumber}</h2>
      </div>
    );
  }
}

// -------------------------Passing props from Parent to Child Component--------------------------------
// Parent Component
import ChildComponent from "./Child";
function ParentComponent(props) {
  let [counter, setCounter] = useState(0);

  let increment = () => setCounter(++counter);

  return (
    <div>
      <button onClick={increment}>Increment Counter</button>
      <ChildComponent counterValue={counter} />
      {/* Providing a prop called counterValue, the value pf counter is being passed from parent to the child compoennt */}
    </div>
  );
}

export default ParentComponent;

// Child Component
function ChildComponent({ counterValue }) {
  return (
    <div>
      <p>Value of counter: {counterValue}</p>
      {/* We use counterValue to display the data passed on by the parent component */}
    </div>
  );
}

// -------------------------Passing props from Child to Parent Component--------------------------------

// Create a callback in parent component, pass the callback as a prop
function ParentComponent(props) {
  let [counter, setCounter] = useState(0);
  let callback = (valueFromChild) => setCounter(valueFromChild);
  return (
    <div>
      <p>Value of counter: {counter}</p>
      <ChildComponent callbackFunc={callback} counterValue={counter} />
    </div>
  );
}

// Pass data from the child to the parent component
function ChildComponent(props) {
  let childCounterValue = props.counterValue;
  return (
    <div>
      <button onClick={() => props.callbackFunc(++childCounterValue)}>
        Increment Counter
      </button>
    </div>
  );
}
