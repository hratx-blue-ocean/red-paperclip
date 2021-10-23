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
<<<<<<< HEAD
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
    chats: [],
    permissions: '',
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
=======
  const [currentUser, setCurrentUser] = useState({});
  const [activeItem, setActiveItem] = useState({});
>>>>>>> main
  const [watchedItems, setWatchedItems] = useState([]);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [allChatRooms, setAllChatRooms] = useState([]);
  const [currentChatRoom, setCurrentChatRoom] = useState('');

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const [apiUrl, setApiUrl] = useState(
    'http://localhost:5001/red-paperclip-73a89/us-central1/api'
  );

  const getActiveItem = (itemString) => {
    axios
      .get(`${apiUrl}/getItem?uid=${itemString}`)
      .then((item) => setActiveItem(item.data))
      .catch((error) => console.log('Error retrieving active item: ', error));
  };

  const getWatchedItemsList = (itemsArray) => {
    axios
      .get(`${apiUrl}/getItems`, { params: { items: itemsArray } })
      .then((watchedItemsData) => {
        setWatchedItems(watchedItemsData.data);
      })
      .catch((error) => console.log('Error retrieving watched items'));
  };

  const getChatRooms = (usersChatRooms) => {
    axios
      .get(`${apiUrl}/getChatRooms`, {
        params: {
          chatRooms: usersChatRooms,
        },
      })
      .then((data) => {
        console.log('test point:', data);
        setAllChatRooms(data);
      })
      .catch((err) => console.log('error getting all chat rooms: ', err));
  };

  useEffect(() => {
<<<<<<< HEAD
    getActiveItem(currentUser.availableItem);
    getWatchedItemsList(Object.keys(currentUser.watchedItems));
    getChatRooms(currentUser.chatRooms);
=======
    if (isLoggedIn) {
      getActiveItem(currentUser.availableItem);
      getWatchedItemsList(Object.keys(currentUser.watchedItems));
    }
>>>>>>> main
  }, [isLoggedIn]);

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
        watchedItemsState: [watchedItems, setWatchedItems],
        showAuthModalState: [showAuthModal, setShowAuthModal],
        menuOpenState: [menuOpen, setMenuOpen],
        anchorElState: [anchorEl, setAnchorEl],
        handleMenuOpen,
        currentChatRoomState: [currentChatRoom, setCurrentChatRoom],
        allChatRoomsState: [allChatRooms, setAllChatRooms],
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
};
