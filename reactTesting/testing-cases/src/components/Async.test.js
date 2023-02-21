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
  })
})