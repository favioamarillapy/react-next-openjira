import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1b20',
          color: '#fff'
        }
      }
    }
  }
});

export const lightTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});