import { render, screen, waitFor } from '@testing-library/react';
import CustomDrawer from './CustomDrawer';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

describe('Drawer component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <CustomDrawer />
      </ThemeProvider>
    );
  })

  it('showing loader correctly', () => {
    const loader = screen.getByTestId('navigationLoading');
    expect(loader).toBeInTheDocument();
  });

  it('Fetches data correctly', async() => {
    const navigation = await waitFor(() => screen.getByTestId('navigationContent'));
    expect(navigation).toBeInTheDocument();
  });
});
