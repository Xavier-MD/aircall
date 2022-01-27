import { createTheme } from '@mui/material/styles';
import { deepPurple, blueGrey } from '@mui/material/colors';

const mainTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: deepPurple[500]
    },
    secondary: {
      main: '#2cc41c'
    },
    accent: {
      main: blueGrey[400]
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