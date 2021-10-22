/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState } from 'react';

export const Theme = createContext();

export const ThemeProvider = (props) => {
  // Place global state here as needed
  // Ensure that state is also added to the wrapper in the return value
  // To use the context, import { ItemsContext } from this file and
  // set the value equal to the needed state, e.g.:
  // const { isLoggedIn } = useContext(ItemsContext);

  const [colorPalette, setColorPalette] = useState({
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
    },
  });

  return (
    <Theme.Provider
      value={{
        // Add global state here
        colorPalette: [colorPalette, setColorPalette],
      }}
    >
      {props.children}
    </Theme.Provider>
  );
};
