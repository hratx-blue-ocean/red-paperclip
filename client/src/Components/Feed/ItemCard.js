/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import dateFormat from 'dateformat';
import CloseIcon from '@mui/icons-material/Close';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import axios from 'axios';
import ReportModal from './ReportModal';
import TradeModal from './TradeModal';
import ItemModal from './ItemModal';
import { ItemsContext } from '../ItemsContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxHeight: '98%',
  background: '#000000e5',
  border: '4px solid white',
  boxShadow: 75,
  borderRadius: '15px',
};

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  bold: {
    fontWeight: 600,
  },
  hover2: {
    color: '#ffffff',
    '&:hover': {
      color: '#f0CC71',
    },
  },
  hover3: {
    color: '#A10000',
    '&:hover': {
      color: '#ffffff',
    },
  },
  hover1: {
    color: '#161513',
    '&:hover': {
      color: '#f0CC71',
    },
  },
}));

export default function ItemCard({ item }) {
  const classes = useStyles();
  const { currentUserState, isLoggedInState, apiUrlState } =
    useContext(ItemsContext);
  const [currentUser, setCurrentUser] = currentUserState;
  const [isLoggedIn] = isLoggedInState;
  const [apiUrl] = apiUrlState;
  // star fill
  const [starFill, setStarFill] = useState(false);

  const handleStarClick = () => {
    if (isLoggedIn) {
      // if currently on Watchlist
      if (starFill) {
        axios
          .put(`${apiUrl}/editWatchList`, {
            uid: item.uid,
            email: currentUser.email,
            type: 'delete',
          })
          .then(() => {
            const { watchedItems } = currentUser;
            delete watchedItems[item.uid];
            setCurrentUser({
              ...currentUser,
              watchedItems,
            });
            setStarFill(false);
          })
          .catch((err) => {
            console.log('FAILED to remove item from watchlist --> ', err);
          });
      } else {
        // if not on watchlist
        axios
          .put(`${apiUrl}/editWatchList`, {
            uid: item.uid,
            email: currentUser.email,
            type: 'add',
          })
          .then(() => {
            const { watchedItems } = currentUser;
            watchedItems[item.uid] = item.uid;
            setCurrentUser({
              ...currentUser,
              watchedItems,
            });
            setStarFill(true);
          })
          .catch((err) => {
            console.log('FAILED to add item to watchlist --> ', err);
          });
      }
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      // this is not here!
      if (currentUser.watchedItems[item.uid]) {
        setStarFill(true);
      }
    }
  }, []);

  // const handleStarClick = () => {
  //   setStarFill(false);
  //   axios
  //     .put(`${apiUrl}/editWatchList`, {
  //       uid: item.uid,
  //       email: currentUser.email,
  //       type: 'delete',
  //     })
  //     .then()
  //     .catch((err) => {
  //       console.log('FAILED to remove item from watchlist --> ', err);
  //     });
  // };
  // item modal
  const [openCard, setCardOpen] = useState(false);
  const handleCardOpen = () => setCardOpen(true);
  const handleCardClose = () => setCardOpen(false);

  // report modal
  const [openReport, setReportOpen] = useState(false);
  const handleReportOpen = () => setReportOpen(true);
  const handleReportClose = () => setReportOpen(false);
  // handle report
  const [reported, setReported] = useState(false);
  const handleReport = (uid) => {
    axios({
      method: 'post',
      url: `${apiUrl}/reportItem`,
      params: { uid },
    })
      .then(() => setReported(true))
      .catch((err) => {
        console.log('FAILED to report item in the firebase server --> ', err);
      });
  };
  // trade modal
  const [TradeOpen, setTradeOpen] = useState(false);
  const handleTradeOpen = () => setTradeOpen(true);
  const handleTradeClose = () => setTradeOpen(false);
  // handle trade
  const [trade, setTrade] = useState(false);
  const handleTrade = () => setTrade(true);

  return (
    <div className={classes.root}>
      <Modal open={openCard} onClose={handleCardClose}>
        <Box style={{ overflow: 'auto' }} sx={style}>
          <ItemModal
            handleCardClose={handleCardClose}
            starFill={starFill}
            handleStarClick={handleStarClick}
            handleTradeOpen={handleTradeOpen}
            handleReportOpen={handleReportOpen}
            item={item}
          />
        </Box>
      </Modal>

      {isLoggedIn && (
        <Modal open={openReport} onClose={handleReportClose}>
          <Box
            sx={style}
            style={{ backgroundColor: '#494D53', maxWidth: '25%' }}
          >
            <ReportModal
              handleReportClose={handleReportClose}
              reported={reported}
              handleReport={handleReport}
              item={item}
            />
          </Box>
        </Modal>
      )}
      {!isLoggedIn && (
        <Modal open={openReport} onClose={handleReportClose}>
          <Box sx={style} style={{ backgroundColor: '#494D53' }}>
            <ReportModal
              handleReportClose={handleReportClose}
              reported={reported}
              handleReport={handleReport}
              item={item}
            />
          </Box>
        </Modal>
      )}

      <Modal open={TradeOpen} onClose={handleTradeClose}>
        <Box sx={style} style={{ backgroundColor: '#494D53' }}>
          <TradeModal
            handleTradeClose={handleTradeClose}
            trade={trade}
            handleTrade={handleTrade}
            item={item}
          />
        </Box>
      </Modal>

      <Grid
        container
        style={{ justifyContent: 'flex-start', position: 'absolute' }}
      >
        {!starFill && (
          <IconButton onClick={handleStarClick}>
            <StarIcon
              className={classes.hover1}
              style={{ justifyContent: 'flex-start', fontSize: 40 }}
            />
          </IconButton>
        )}
        {starFill && (
          <IconButton onClick={handleStarClick}>
            <StarIcon
              className={classes.hover1}
              style={{
                color: '#F0CC71',
                justifyContent: 'flex-start',
                fontSize: 40,
              }}
            />
          </IconButton>
        )}
      </Grid>
      <Grid container>
        <Card
          style={{
            backgroundColor: '#494D53',
            border: '1px solid',
            borderColor: '#FFF',
            borderRadius: '15px',
          }}
        >
          <CardMedia
            component="img"
            image={item.itemPhoto}
            style={{
              objectFit: 'cover',
              minHeight: '275px',
              maxHeight: '250px',
              cursor: 'pointer',
            }}
            alt={item.itemName}
            onClick={handleCardOpen}
          />
          <Grid container style={{ marginTop: '6px' }}>
            {item.itemName.length > 25 && (
              <Grid
                container
                item
                xs={12}
                style={{ justifyContent: 'flex-start' }}
                alignItems="baseline"
              >
                <Typography
                  variant="h6"
                  style={{ marginLeft: '22px', color: '#F0CC71' }}
                >
                  {`${item.itemName.slice(0, 26)}... `}
                </Typography>
              </Grid>
            )}
            {item.itemName.length <= 25 && (
              <Grid
                container
                item
                xs={12}
                style={{ justifyContent: 'flex-start' }}
                alignItems="baseline"
              >
                <Typography
                  variant="h6"
                  style={{ marginLeft: '22px', color: '#F0CC71' }}
                >
                  {item.itemName}
                </Typography>
              </Grid>
            )}
          </Grid>
          {item.itemOwnerPhoto && (
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: red[500], marginLeft: '8px' }}
                  src={item.itemOwnerPhoto}
                  alt={item.itemOwner}
                />
              }
              title={item.itemOwner}
              subheader={dateFormat(item.createdAt.date, 'mmmm dS, yyyy')}
              style={{
                marginBottom: '-20px',
                marginTop: '-12px',
                color: '#FFFFFF',
              }}
            />
          )}
          {!item.itemOwnerPhoto && (
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: red[500], marginLeft: '8px' }}
                  alt={item.itemOwner}
                />
              }
              title={item.itemOwner}
              subheader={dateFormat(item.createdAt.date, 'mmmm dS, yyyy')}
              style={{
                marginBottom: '-20px',
                marginTop: '-12px',
                color: '#FFFFFF',
              }}
            />
          )}
          <CardContent>
            {item.itemDescription.length > 60 && (
              <Grid
                container
                item
                xs={12}
                justifyContent="center"
                style={{ marginBottom: '20px' }}
              >
                <Typography
                  variant="body2"
                  color="secondary"
                  style={{ marginLeft: '10px' }}
                  display="inline"
                >
                  {`${item.itemDescription.slice(0, 61)}... `}
                  <Link
                    className={classes.hover1}
                    component="button"
                    underline="none"
                    display="inline"
                    color="cardButton"
                    onClick={handleCardOpen}
                  >
                    Read more
                  </Link>
                </Typography>
              </Grid>
            )}
            {item.itemDescription.length <= 60 && (
              <Grid
                container
                item
                xs={12}
                justifyContent="center"
                style={{ marginBottom: '20px' }}
              >
                <Typography
                  variant="body2"
                  color="secondary"
                  style={{ marginLeft: '10px' }}
                  display="inline"
                >
                  {item.itemDescription}
                </Typography>
              </Grid>
            )}
            <Grid container item xs={12} justifyContent="center">
              <Grid container item xs={6} justifyContent="center">
                <Button
                  color="inherit"
                  variant="outlined"
                  className={classes.hover2}
                  onClick={handleTradeOpen}
                >
                  Offer Trade
                </Button>
              </Grid>
              <Grid container item xs={6} justifyContent="space-evenly">
                <Button
                  color="inherit"
                  variant="outlined"
                  className={classes.hover2}
                  onClick={handleReportOpen}
                >
                  Report Item
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
