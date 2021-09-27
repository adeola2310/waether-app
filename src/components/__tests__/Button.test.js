import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomButton from '../Button/Button';

afterEach(() => {
  cleanup();
});

it('renders the button component', () => {
  const { getByTestId } = render(<CustomButton />);
  const element = getByTestId('button');
  expect(element).toBeInTheDocument();
});
