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
  const [currentUser, setCurrentUser] = useState({});
  const [activeItem, setActiveItem] = useState({});
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

  const getAllChatRooms = (usersChatRooms) => {
    axios
      .get(`${apiUrl}/getAllChatRooms`, {
        params: {
          chatRooms: usersChatRooms,
        },
      })
      .then((data) => {
        setAllChatRooms(data.data);
      })
      .catch((err) => console.log('error getting all chat rooms: ', err));
  };

  const getChatRoom = (chatRoomId) => {
    axios
      .get(`${apiUrl}/getChatRoom?uid=${chatRoomId}`)
      .then((chatRoom) => setCurrentChatRoom(chatRoom.data))
      .catch((err) => console.error('Error retrieving the specific chat room'));
  };

  useEffect(() => {
    if (isLoggedIn) {
      getActiveItem(currentUser.availableItem);
      getWatchedItemsList(Object.keys(currentUser.watchedItems));
      if (currentUser.chatRooms.length > 0) {
        getAllChatRooms(currentUser.chatRooms);
        getChatRoom(currentUser.chatRooms[0]);
      }
    }
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
