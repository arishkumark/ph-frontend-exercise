import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app container', () => {
  render(<App />);
  const mainContainer = screen.getByTestId('container');
  expect(mainContainer).toBeInTheDocument();
});
