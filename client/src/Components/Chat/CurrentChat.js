import * as React from 'react';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

export default function CurrentChat({ name, profilePic, timestamp }) {
  return (
    <div className="chat">
      <h5>Current Chat: </h5>
      <Avatar className="chat_image" src={profilePic} />
      <div className="chat_details">
        <h2>{name}</h2>
      </div>
      <p className="chat_timestamp">{timestamp}</p>
    </div>
  );
}
