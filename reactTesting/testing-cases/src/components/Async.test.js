import {render, screen} from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  // we need to use async and await to get the result due to findAllByRole
  test('renders posts if request succeeds', async () => {
    // using jest.fn to mock the sending http request but not actually sending it
    window.fetch = jest.fn();
    // this allow us to set a value this fetch function should resolve to when it's being called
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First post' }],
    });
    render(<Async />)

    // getAllByRole will fail because it check immediately, there is no data initially
    // findAllByRole can work because it return a promise, and will check results multiple times
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0)
  });

  // In order to test, we need to mock the fetch function, which is a global function available in the browser environment,
  // and return some mock data that we can use to verify that our component is rendering the data correctly.
  test("renders list of posts fetched asynchronously", async () => {
    /* We start by creating some mock data that we want to return when the fetch function is called. 
    This mock data represents an array of posts, each with an id, title, body, and userId property.*/
    const mockPosts = [
      {
        userId: 1,
        id: 1,
        title: "Mock Post 1",
        body: "Mock Post 1 Body",
      },
      {
        userId: 1,
        id: 2,
        title: "Mock Post 2",
        body: "Mock Post 2 Body",
      },
    ];
    /* Next, we use Jest's spyOn function to mock the fetch function globally. 
    We then mock the json method of the Response object that is returned by the fetch function to return our mock data. */
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockPosts),
    });
  
    // We import the Async component itself that we want to test.
    render(<Async />);
    // We can use screen.findByRole to wait for the list element to appear, since it is fetched asynchronously. 
    // Once the list is rendered, we can verify that it contains the correct number of items and that each item has the correct title.
    const postList = await screen.findByRole("list");
    expect(postList).toBeInTheDocument();
  
    mockPosts.forEach((post) => {
      const postTitle = screen.getByText(post.title);
      expect(postTitle).toBeInTheDocument();
    });
  
    // we restore the original fetch function using mockRestore to clean up our test environment.
    // By mocking the fetch function and returning mock data, we can verify that our Async component correctly fetches and renders data from an API.
    global.fetch.mockRestore();
  });
});

