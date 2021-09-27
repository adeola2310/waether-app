import { cleanup, render } from '@testing-library/react';
import PageLoader from '../PageLoader/PageLoader';

describe('it should display the loader component', () => {
  afterEach(cleanup);

  it('should render without errors', () => {
    // Act
    const { getByTestId } = render(<PageLoader />);
    const element = getByTestId('loader');

    // Assert
    expect(element).toBeInTheDocument();
    expect(element.children.length).toEqual(2);
  });
});
