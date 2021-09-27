import { cleanup, render } from '@testing-library/react';
import Error from '../Error/Error';

describe('it should render the error message', () => {
  afterEach(cleanup);

  it('renders error message component without crashing', () => {
    render(<Error />);
    expect(true).toBe(true);
  });
});
