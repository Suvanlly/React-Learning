// Class component: are declared using ES6 class
class card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>123</div>;
  }
}

// Function component: can be declared using an arrow function or the function keyword
// declared with function keyword
function card(props) {
  return <div>123</div>;
}

// declared with arrow function
const card = (props) => {
  return <div>123</div>;
};
