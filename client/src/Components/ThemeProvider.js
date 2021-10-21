/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState } from 'react';

export const Theme = createContext();

export const ThemeProvider = (props) => {
  // Place global state here as needed
  // Ensure that state is also added to the wrapper in the return value
  // To use the context, import { ItemsContext } from this file and
  // set the value equal to the needed state, e.g.:
  // const { isLoggedIn } = useContext(ItemsContext);

  const [colorPalete, setColorPalete] = useState({
    palette: {
      primary: {
        main: '#2C2C2C',
      },
      secondary: {
        main: '#f0CC71',
      },
    },
  });

  return (
    <Theme.Provider
      value={{
        // Add global state here
        colorPalete: [colorPalete, setColorPalete],
      }}
    >
      {props.children}
    </Theme.Provider>
  );
};
