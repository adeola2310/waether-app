import { render } from '@testing-library/react';
import App from './App';

describe('Render App', () => {
  it('should render without error', () => {
    // Act
    const { container } = render(<App />);
    const element = container.querySelector('Router');
    expect(element).toBeInTheDocument();
  });
});
