import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#7F187F',
    },
    secondary: {
      main: '#FFC601',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      'Open Sans',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#fff',
          boxShadow: 'none',
          borderBottom: '1px solid #c3c3c3'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#000'
        }
      }
    }
  }
});

export default responsiveFontSizes(theme);