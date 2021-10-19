/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = (props) => {
  // Place global state here as needed
  // Ensure that state is also added to the wrapper in the return value
  // To use the context, import { ItemsContext } from this file and
  // set the value equal to the needed state, e.g.:
  // const { isLoggedIn } = useContext(ItemsContext);

  const [displayItems, setDisplayItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [modalSignInOpen, setSignInModalOpen] = useState(false);
  const [modalCreateAcctOpen, setModalCreateAcctOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <ItemsContext.Provider
      value={{
        // Add global state here
        displayItemsState: [displayItems, setDisplayItems],
        isLoggedInState: [isLoggedIn, setIsLoggedIn],
        isAdminState: [isAdmin, setIsAdmin],
        modalSignInState: [modalSignInOpen, setSignInModalOpen],
        modalCreateAcctState: [modalCreateAcctOpen, setModalCreateAcctOpen],
        anchorElState: [anchorEl, setAnchorEl],
        menuOpenState: [menuOpen, setMenuOpen],
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
};
