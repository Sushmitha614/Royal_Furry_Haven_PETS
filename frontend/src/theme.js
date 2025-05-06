import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#2196f3' },
    secondary: { main: '#9c27b0' },
    background: { default: '#fff' },
    text: { primary: '#333', secondary: '#666' },
    error: { main: '#e53935' },
    success: { main: '#43a047' },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
    body1: { fontWeight: 400 },
    body2: { fontWeight: 400 },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;