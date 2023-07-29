import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders React template app', () => {
  render(<App />);
  const linkElement = screen.getByText('This is a React template app.');
  expect(linkElement).toBeInTheDocument();
});
