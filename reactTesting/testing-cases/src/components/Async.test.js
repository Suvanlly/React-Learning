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

  test("renders list of posts fetched asynchronously", async () => {
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
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockPosts),
    });
  
    render(<Async />);
    const postList = await screen.findByRole("list");
    expect(postList).toBeInTheDocument();
  
    mockPosts.forEach((post) => {
      const postTitle = screen.getByText(post.title);
      expect(postTitle).toBeInTheDocument();
    });
  
    global.fetch.mockRestore();
  });
});

