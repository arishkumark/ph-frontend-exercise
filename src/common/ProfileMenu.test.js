import { render, screen } from '@testing-library/react';
import ProfileMenu from './ProfileMenu';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

describe('Profile menu component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <ProfileMenu />
      </ThemeProvider>
    );
  })

  it('renders profile menu correctly', () => {
    const appBar = screen.getByTestId('profileMenu');
    expect(appBar).toBeInTheDocument();
  });
});
