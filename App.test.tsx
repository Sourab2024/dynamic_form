import { render, screen } from '@testing-library/react';
import App from '../pages/App';

test('renders JSON Editor and Form Preview', () => {
  render(<App />);
  expect(screen.getByText(/JSON Editor/i)).toBeInTheDocument();
  expect(screen.getByText(/Form Preview/i)).toBeInTheDocument();
});
