import { cleanup, render } from '@testing-library/react';
import WeatherCard from '../WeatherCard/WeatherCard';

const defaultProps = {
  unit: 'metric',
  temp: 50,
  date: '2019/9/18',
  handleSelect: jest.fn(),
};

describe('the Weather Card Component', () => {
  afterEach(cleanup);

  // it('should call handleCardClick when user clicks anywhere in card', () => {
  //     const { getByTestId } = render(<WeatherCard {...defaultProps} />);
  //     const element = getByTestId('card-container');
  //     fireEvent.click(element);
  //     expect(defaultProps.handleSelect).toHaveBeenCalled();
  // });

  it('should render unit as C when unit is metric', () => {
    const { getByTestId } = render(<WeatherCard {...defaultProps} />);
    const element = getByTestId('unit');
    expect(element.textContent).toEqual('°C');
  });

  it('should render unit as F when unit is imperial', () => {
    const props = {
      ...defaultProps,
      unit: 'imperial',
    };
    const { getByTestId } = render(<WeatherCard {...props} />);
    const element = getByTestId('unit');
    expect(element.textContent).toEqual('°F');
  });

  // it('should render temperature value correctly', () => {
  //     // Act
  //     const { getByTestId } = render(<WeatherCard {...defaultProps} />);
  //     const element = getByTestId('unit');
  //
  //     // Assert
  //     expect(element.textContent).toEqual('50');
  // });
  // it('should render temperature date correctly', () => {
  //     const { getByTestId } = render(<WeatherCard {...defaultProps} />);
  //     const element = getByTestId('date');
  //     expect(element.textContent).toEqual('2019/09/18');
  // });
});
