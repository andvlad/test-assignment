import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders order', () => {
  render(<App />);

  const loadingElement = screen.getByText(/Loading/i);

  expect(loadingElement).toBeInTheDocument();
});
