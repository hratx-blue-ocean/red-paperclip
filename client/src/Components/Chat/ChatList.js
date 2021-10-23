import React, { useContext, useEffect, useState } from 'react';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { ItemsContext } from '../ItemsContext';

import PreviousChats from './PreviousChats';
import CurrentChat from './CurrentChat';
import Jason from './img/Jason.jpg';

export default function ChatList() {
  const { apiUrlState, currentUserState, allChatRoomsState } =
    useContext(ItemsContext);
  const [apiUrl, setApiUrl] = apiUrlState;
  const [currentUser, setCurrentUser] = currentUserState;
  const [allChatRooms, setAllChatRooms] = allChatRoomsState;

  // needs to make the axios request to retireve the list of chat rooms
  const getChatRooms = (usersChatRooms) => {
    axios
      .get(`${apiUrl}/getChatRooms`, {
        params: {
          chatRooms: usersChatRooms,
        },
      })
      .then((data) => {
        console.log('data from the http request:', data);
        setAllChatRooms(data);
      });
  };

  useEffect(() => {
    const usersChatRooms = currentUser.chatRooms;
    getChatRooms(usersChatRooms);
  }, []);

  // then dynamically render all of the chat rooms

  // onclick function
  // once clicked
  // sets the global state of currentChatRoom

  return (
    <Paper elevation={3} style={{ borderRadius: 30 }}>
      <CurrentChat name="Jason" profilePic={Jason} timestamp="42 minutes ago" />

      <Divider />

      <PreviousChats />
    </Paper>
  );
}
