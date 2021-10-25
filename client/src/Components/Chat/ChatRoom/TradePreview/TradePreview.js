import React, { useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import { ItemsContext } from '../../../ItemsContext';
import TradeModal from './TradeModal';
import TradeDetails from './TradeDetails';

export default function TradePreview() {
  const { currentUserState, currentChatRoomState } = useContext(ItemsContext);
  const [currentUser, setCurrentUser] = currentUserState;
  const [currentChatRoom, setCurrentChatRoom] = currentChatRoomState;
  const {
    trader1,
    trader1Photo,
    trader1ItemPhoto,
    trader2,
    trader2Photo,
    trader2ItemPhoto,
  } = currentChatRoom;

  return (
    <Grid container spacing={2}>
      {trader1 === currentUser.firstName ? (
        <>
          <TradeDetails
            trader1={trader1}
            trader1Photo={trader1Photo}
            trader1ItemPhoto={trader1ItemPhoto}
            trader2={trader2}
            trader2Photo={trader2Photo}
            trader2ItemPhoto={trader2ItemPhoto}
          />

          <TradeModal
            trader1ItemPhoto={trader1ItemPhoto}
            trader2ItemPhoto={trader2ItemPhoto}
          />
        </>
      ) : (
        <>
          <TradeDetails
            trader1={trader2}
            trader1Photo={trader2Photo}
            trader1ItemPhoto={trader2ItemPhoto}
            trader2={trader1}
            trader2Photo={trader1Photo}
            trader2ItemPhoto={trader1ItemPhoto}
          />

          <TradeModal
            trader1ItemPhoto={trader2ItemPhoto}
            trader2ItemPhoto={trader1ItemPhoto}
          />
        </>
      )}
    </Grid>
  );
}
