import { render, screen } from '@testing-library/react';
import CustomAppBar from './CustomAppBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

describe('App bar component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <CustomAppBar />
      </ThemeProvider>
    );
  })

  it('renders appbar correctly', () => {
    const appBar = screen.getByTestId('appBar');
    expect(appBar).toBeInTheDocument();
  });
});
