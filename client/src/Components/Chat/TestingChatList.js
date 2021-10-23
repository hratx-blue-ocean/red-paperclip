import React from 'react';
import List from '@mui/material/List';

import './Chats.css';
import ChatListEntry from './ChatListEntry';
import Matt from './img/Matt.jpg';
import Bekah from './img/Bekah.png';
import Cory from './img/Cory.png';
import Pingping from './img/Pingping.jpg';
import Blake from './img/Blake.png';
import Will from './img/Will.png';
import Travis from './img/Travis.png';

export default function TestingChatList() {
  return (
    <List
      className="chats"
      style={{ height: 600, borderRadius: 30, padding: 30, overflow: 'auto' }}
    >
      <ChatListEntry
        name="Matt"
        message="is it still availible??"
        timestamp="3 days ago"
        profilePic={Matt}
      />

      <ChatListEntry
        name="Bekah"
        message="Hey I love your artwork"
        timestamp="5 days ago"
        profilePic={Bekah}
      />

      <ChatListEntry
        name="Cory"
        message="how much did you bought it?"
        timestamp="5 days ago"
        profilePic={Cory}
      />

      <ChatListEntry
        name="Travis"
        message="what is your location?"
        timestamp="6 days ago"
        profilePic={Travis}
      />

      <ChatListEntry
        name="Blake"
        message="what is the size of this?"
        timestamp="6 days ago"
        profilePic={Blake}
      />
      <ChatListEntry
        name="Will"
        message="well, let me think about it."
        timestamp="10 days ago"
        profilePic={Will}
      />
      <ChatListEntry
        name="Pingping"
        message="sounds good to me!"
        timestamp="14 days ago"
        profilePic={Pingping}
      />
    </List>
  );
}
