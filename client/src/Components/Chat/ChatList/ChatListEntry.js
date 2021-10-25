import React, { useContext } from 'react';
import '../Chats.css';
import Avatar from '@mui/material/Avatar';
import { ItemsContext } from '../../ItemsContext';

export default function ChatListEntry({ entryObj }) {
  const { currentUserState } = useContext(ItemsContext);
  const [currentUser, setCurrentUser] = currentUserState;
  const {
    trader1,
    trader1Photo,
    trader1ItemPhoto,
    trader2,
    trader2Photo,
    trader2ItemPhoto,
    timestamp,
    lastMessage,
  } = entryObj;

  // onclick function
  // once clicked
  // sets the global state of currentChatRoom

  return (
    <>
      {trader1 === currentUser.firstName ? (
        <>
          <div className="chat">
            <Avatar className="chat_image" src={trader2Photo} />
            <div className="chat_details">
              <h2>{trader2}</h2>
              <p>{lastMessage}</p>
            </div>
            <p className="chat_timestamp">{timestamp}</p>
          </div>
        </>
      ) : (
        <>
          <div className="chat">
            <Avatar className="chat_image" src={trader1Photo} />
            <div className="chat_details">
              <h2>{trader1}</h2>
              <p>{lastMessage}</p>
            </div>
            <p className="chat_timestamp">{timestamp}</p>
          </div>
        </>
      )}
    </>
  );
}
