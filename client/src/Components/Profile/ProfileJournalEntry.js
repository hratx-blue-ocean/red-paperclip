/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { useState } from 'react';
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
import CloseIcon from '@mui/icons-material/Close';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ItemModal from '../Feed/ItemModal';
import JournalModal from './JournalModal';

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

export default function ProfileJournalEntry(props) {
  const classes = useStyles();
  // mouse over image

  // star fill
  const [starFill, setStarFill] = React.useState(false);
  const handleWatch = () => {
    setStarFill(true);
  };
  const handleUnwatch = () => {
    setStarFill(false);
  };
  // item modal
  const [openCard, setCardOpen] = useState(false);
  const [openJournal, setJournalOpen] = useState(false);

  const handleCardOpen = () => setCardOpen(true);
  const handleCardClose = () => setCardOpen(false);

  const handleJournalOpen = () => setJournalOpen(true);
  const handleJournalClose = () => setJournalOpen(false);
  const handleRelistOpen = () => alert("Don't touch that.");

  const { itemName, itemDesc, itemOwner, itemPicture } =
    props.activeItem.journalItem;

  return (
    <div className={classes.root} key={props.index}>
      <Modal open={openCard} onClose={handleCardClose}>
        <Box style={{ overflow: 'auto' }} sx={style}>
          <ItemModal
            handleCardClose={handleCardClose}
            starFill={starFill}
            handleWatch={handleWatch}
            handleUnwatch={handleUnwatch}
          />
        </Box>
      </Modal>

      <Modal open={openJournal} onClose={handleJournalClose}>
        <Box sx={style} style={{ backgroundColor: '#494D53', maxWidth: '25%' }}>
          <JournalModal
            handleJournalClose={handleJournalClose}
            journalText={props.activeItem.journalText}
          />
        </Box>
      </Modal>

      <Grid container>
        <Card
          style={{
            backgroundColor: '#494D53',
            border: '1px solid',
            borderColor: '#FFF',
            borderRadius: '15px',
            paddingBottom: -50,
          }}
        >
          <CardMedia
            component="img"
            height={props.height}
            image="https://images.squarespace-cdn.com/content/v1/5acd0a3c8ab722892928be5a/1565878992439-2ER3KM60OHYNPNF2LPP3/8B059829-6D7F-424F-B9A7-4C44C112CFF9.jpg?format=2500w"
            style={{ objectFit: 'cover' }}
            alt="Axe Set"
            onClick={handleCardOpen}
          />
          <Grid container style={{ marginTop: '6px' }}>
            <Grid
              container
              item
              xs={10}
              justifyContent="flex-start"
              alignItems="baseline"
            >
              <Typography
                variant="h5"
                style={{ marginLeft: '22px', color: '#F0CC71' }}
              >
                {itemName}
              </Typography>
            </Grid>
            <Grid container item xs={2} justifyContent="center">
              {!starFill && (
                <IconButton onClick={handleWatch}>
                  <StarIcon className={classes.hover1} />
                </IconButton>
              )}
              {starFill && (
                <IconButton onClick={handleUnwatch}>
                  <StarIcon
                    className={classes.hover1}
                    style={{ color: '#F0CC71' }}
                  />
                </IconButton>
              )}
            </Grid>
          </Grid>
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: red[500], marginLeft: '8px' }}
                aria-label="user_name"
              />
            }
            title="Jeffrey Dahmer"
            subheader="6 hours ago"
            style={{
              marginBottom: '-20px',
              marginTop: '-12px',
              color: '#FFFFFF',
            }}
          />
          <CardContent>
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              style={{ marginBottom: '20px' }}
            >
              <Typography
                variant="body2"
                color="white"
                style={{ marginLeft: '10px' }}
                display="inline"
              >
                {'These beautiful axes were custom made in the heart of Minnesota' +
                  '... '}
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
            <Grid container item xs={12} justifyContent="center">
              {props.activeItem.journalText.length <= 0 && (
                <Grid container item xs={6} justifyContent="center">
                  <Button
                    color="inherit"
                    variant="outlined"
                    className={classes.hover2}
                    onClick={handleJournalOpen}
                  >
                    Add Journal Entry For Item
                  </Button>
                </Grid>
              )}
              {props.activeItem.journalText.length > 0 && (
                <Typography
                  variant="body2"
                  color="white"
                  style={{ marginLeft: '10px', marginBottom: '10px' }}
                  display="inline"
                >
                  Journal Entry: {props.activeItem.journalText}
                </Typography>
              )}
              <Grid container item xs={6} justifyContent="space-evenly">
                <Button
                  color="inherit"
                  variant="outlined"
                  className={classes.hover2}
                  onClick={handleRelistOpen}
                >
                  Re-List Item
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
