/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

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
  const [currentUser, setCurrentUser] = useState({
    userFirst: '',
    userLast: '',
    userPFP: '',
    userPhone: '',
    userEmail: '',
    userZIP: '',
    availableItem: '',
    tradeHistory: [],
    watchedItems: {},
  });
  const [activeItem, setActiveItem] = useState({
    createdAt: '',
    itemOwner: '',
    active: false,
    itemOwnerPhoto: '',
    report: 0,
    itemDescription: '',
    itemOwnerUID: '',
    itemCategory: '',
    itemPhoto: '',
    itemName: '',
    itemLocation: '',
  });
  const [apiUrl, setApiUrl] = useState(
    'http://localhost:5001/red-paperclip-73a89/us-central1/api'
  );

  const getActiveItem = (itemString) => {
    axios
      .get(`${apiUrl}/getItem?uid=${itemString}`)
      .then((item) => setActiveItem(item.data))
      .catch((error) => console.log('Error retrieving active item: ', error));
  };

  useEffect(() => {
    getActiveItem(currentUser.availableItem);
  }, [currentUser]);

  return (
    <ItemsContext.Provider
      value={{
        // Add global state here
        displayItemsState: [displayItems, setDisplayItems],
        isLoggedInState: [isLoggedIn, setIsLoggedIn],
        isAdminState: [isAdmin, setIsAdmin],
        currentUserState: [currentUser, setCurrentUser],
        apiUrlState: [apiUrl, setApiUrl],
        activeItemState: [activeItem, setActiveItem],
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
};
