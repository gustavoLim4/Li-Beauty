// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E88D8C', 
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#78373E', 
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#bbbbbb',
    },
  },

  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          backgroundColor: '#ffffff',
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          backgroundColor: '#ffffff',

          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E0E0E0',
          },

          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E88D8C',
          },

          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#78373E',
            borderWidth: '2px',
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          textTransform: 'none',
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: '#E88D8C',
          '&:hover': {
            backgroundColor: '#d97776',
          },
        },
        containedSecondary: {
          backgroundColor: '#78373E',
          '&:hover': {
            backgroundColor: '#5c2a2f',
          },
        },
      },
    },
  },
});

export default theme;