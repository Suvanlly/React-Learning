import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: true,
    };
  }
  toggleShowHide = () => {
    this.setState({ isDisplayed: !state.isDisplayed });
  };

  render() {
    const hello = "Welcome to React";
    return (
      <div>
        <HelloReact hello={hello} isDisplayed={this.state.isDisplayed} />
        <button onClick={this.toggleShowHide} type="button">
          Toggle Show/Hide
        </button>
      </div>
    );
  }
}

// Child Component

const HelloReact = ({ hello, isDisplayed }) => {
  isDisplayed ? <h1>{hello}</h1> : null;
};

export default App;

//------------------------------Passing Props from Child to Parent-----------------------------------------

import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: true,
    };
  }
  toggleShowHide = () => {
    this.setState((state) => ({ isDisplayed: !state.isDisplayed }));
  };
  render() {
    const hello = "Hello to React";
    return (
      <div>
        <HelloReact hello={hello} isDisplayed={this.state.isDisplayed} /> 
        <Button onClick={this.toggleShowHide} />
      </div>
    );
  }
}

const Button = ({ onClick }) => {
  <button onClick={onClick} type="button">
    Toggle Show/Hide
  </button>;
};

const HelloReact = ({ hello, isDisplayed }) => isDisplayed ? <h1>{hello}</h1> : null;

export default App

/*
We can see that there is no way to pass props from a child component to a parent component.
However, we can always pass around functions from the parent to child component. The child component can 
then make use of these functions. tHe function can then update the state in a parent component. 
Once our state gets changed, it is passed down as props again. 
Thus, all the relevant components get rendered again.
*/