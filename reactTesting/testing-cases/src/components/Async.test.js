import {render, screen} from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  // we need to use async and await to get the result due to findAllByRole
  test('renders posts of request succeeds', async () => {
    render(<Async />)

    // getAllByRole will fail because it check immediately, there is no data initially
    // findAllByRole can work because it return a promise, and will check results multiple times
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0)
  })
})