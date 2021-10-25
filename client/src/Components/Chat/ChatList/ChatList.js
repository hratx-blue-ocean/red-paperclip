import React, { useContext } from 'react';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import ChatListEntry from './ChatListEntry';
import { ItemsContext } from '../../ItemsContext';

export default function ChatList() {
  const { allChatRoomsState } = useContext(ItemsContext);
  const [allChatRooms, setAllChatRooms] = allChatRoomsState;

  return (
    <Paper elevation={3} style={{ borderRadius: 30 }}>
      <List
        className="chats"
        style={{
          height: 600,
          borderRadius: 30,
          padding: 30,
          overflow: 'auto',
        }}
      >
        {allChatRooms.map((element, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <ChatListEntry entryObj={element} key={key} />
        ))}
      </List>
    </Paper>
  );
}
