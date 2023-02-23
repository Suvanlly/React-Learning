// Function components use React hooks to handle state
// It uses the useState hook to set the state of a variable inside the component

function ClassRoom(props) {
  let [studentCount, setStudentCount] = useState(0);
  const addStudent = () => {
    setStudentCount(++studentCount);
  };

  return (
    <div>
      <p>Number of Students: {studentCount}</p>
      <button onClick={addStudent}>Add Student</button>
    </div>
  );
}

// Convert it into a class component
// We are using this.state to add the variable studentCount and setting the value to "0"
// For reading the state, we are using this.state.studentCount
// For updating the state, we need to first bind the addStudent function to this, then we will be use the setState function to update the state

class ClassRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { studentCount: 0 };
    this.addStudent = this.addStudent.bind(this);
  }
  addStudent() {
    this.setState((prevState) => {
      return {
        studentCount: prevState.studentCount++,
      };
    });
  }
  render() {
    return (
      <div>
        <P>Number of Students: {this.state.studentCount}</P>
        <button onClick={this.addStudent}>Add Student</button>
      </div>
    );
  }
}

export default ClassRoom;

// Another example of use and update state object
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "BMW",
      color: "Black",
    };
  }
  changeColor() {
    this.setState((prevState) => {
      return { color: "Red" };
    });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.changeColor()}>Change Color</button>
        <p>{this.state.color}</p>
      </div>
    );
  }
}
