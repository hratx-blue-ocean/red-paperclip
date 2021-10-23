import * as React from 'react';
import './Chats.css';
import Avatar from '@mui/material/Avatar';

// for future use when connecting to the back-end
export default function ChatListEntry({
  name,
  message,
  timestamp,
  profilePic,
}) {
  return (
    <div className="chat">
      <Avatar className="chat_image" src={profilePic} />
      <div className="chat_details">
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <p className="chat_timestamp">{timestamp}</p>
    </div>
  );
}

//      <nav aria-label="main mailbox folders">
