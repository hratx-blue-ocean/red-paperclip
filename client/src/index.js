import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './Components/App';
import { ItemsProvider } from './Components/ItemsContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#F0CC71',
    },
    cardButton: {
      main: '#161513',
    },
    cardColor: {
      main: '#494D53',
    },
    deleteColor: {
      main: '#A10000',
    },
    dismissColor: {
      main: '#066F04',
    },
    banColor: {
      main: '#000000',
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
    text: {
      white: '#FFFFFF',
      gold: '#F0CC71',
    },
    formLabel: {
      color: '#d3d3d3',
      '&.Mui-focused': {
        color: '#23A5EB',
      },
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
