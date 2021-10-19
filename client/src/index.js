import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './Components/App';
import { ItemsProvider } from './Components/ItemsContext';

const theme = createTheme({
  palette: {
    cardButton: {
      main: '#161513',
    },
    cardColor: {
      main: '#494D53',
    },
    textWhite: {
      main: '#FFFFFF',
    },
    textYellow: {
      main: '#F0CC71',
    },
    sortButton: {
      main: '#2C2C2C',
    },
    paperClip: {
      main: '#A10000',
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
