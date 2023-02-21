import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from "./Greeting"

// describe is a test suite that contains all test cases relating to Greeting component
// Greeting component is test suite name
describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />);
  
    // Act
    // ...nothing
  
    // Assert
    const testElement = screen.getByText("Hello World!");
    expect(testElement).toBeInTheDocument();
  });

  // Now this test case includes two components: 
  // Greeting and Output, so it can be integration test
  test('renders "good to see you" if the button was NOT clicked', () => {
    render(<Greeting />);

    // exact: false means don't check exact value
    const outputElement = screen.getByText('good to see you', {exact: false});
    expect(outputElement).toBeInTheDocument();
  });

  // Now this test case includes two components: 
  // Greeting and Output, so it can be integration test
  test('renders "Changed!" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);
    
    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument();
  })

  
  test('should not render "good to see you" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);
    
    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    // we can't use getByText(...) because it will throw an error if not found
    const outputElement = screen.queryByText('good to see you!', {exact:false});
    expect(outputElement).toBeNull()
  })
})
