import { createTheme } from '@mui/material/styles';
import { blue, deepPurple } from '@mui/material/colors';

const mainTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: deepPurple[500]
    },
    secondary: {
      main: blue[500]
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