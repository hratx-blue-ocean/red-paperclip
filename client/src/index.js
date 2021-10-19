import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './Components/App';
import { ItemsProvider } from './Components/ItemsContext';

const theme = createTheme({
  palette: {
    textWhite: {
      main: '#FFFFFF',
    },
    cardColor: {
      main: '#494D53',
    },
    textYellow: {
      main: '#F0CC71',
    },
    cardButton: {
      main: '#161513',
    },
    sortButton: {
      main: '#2C2C2C',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ItemsProvider>
      <App />
    </ItemsProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
