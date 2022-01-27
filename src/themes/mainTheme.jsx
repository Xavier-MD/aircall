import { createTheme } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';

const mainTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: deepPurple[500]
    },
    secondary: {
      main: '#2cc41c'
    }
  },
  typography: {
    fontFamily: [
      'Open Sans',
      'Raleway',
      'Jost',
      'Work Sans'
    ].join(',')
  },
  shape: {
    borderRadius: 3,
  },
});

export default mainTheme;