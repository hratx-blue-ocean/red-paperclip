import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/Profile.App';
import { ItemsProvider } from './Components/ItemsContext';

ReactDOM.render(
  <ItemsProvider>
    <App />
  </ItemsProvider>,
  document.getElementById('root')
);
