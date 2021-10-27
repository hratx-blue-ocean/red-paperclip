import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import dateFormat from 'dateformat';
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
import ReportModal from './ReportModal';
import TradeModal from './TradeModal';

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

export default function ItemModal({
  handleCardClose,
  starFill,
  handleStarClick,
  handleTradeOpen,
  handleReportOpen,
  item,
}) {
  const classes = useStyles();

  let subheaderString = '';

  if (item.createdAt) {
    subheaderString = dateFormat(item.createdAt.date, 'mmmm dS, yyyy');
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        style={{ justifyContent: 'flex-end', position: 'absolute' }}
      >
        <IconButton onClick={handleCardClose}>
          <CloseIcon className={classes.hover3} style={{ fontSize: 45 }} />
        </IconButton>
      </Grid>
      <Grid container>
        <Card style={{ backgroundColor: '#494D53' }}>
          <CardMedia
            component="img"
            position="relative"
            image={item.itemPhoto}
            style={{ objectFit: 'cover' }}
            alt={item.itemName}
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
                {item.itemName}
              </Typography>
            </Grid>
            <Grid container item xs={2} justifyContent="center">
              {!starFill && (
                <IconButton onClick={handleStarClick}>
                  <StarIcon
                    className={classes.hover1}
                    style={{ fontSize: 40 }}
                  />
                </IconButton>
              )}
              {starFill && (
                <IconButton onClick={handleStarClick}>
                  <StarIcon
                    className={classes.hover1}
                    style={{ color: '#F0CC71', fontSize: 40 }}
                  />
                </IconButton>
              )}
            </Grid>
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
              subheader={subheaderString}
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
              subheader={subheaderString}
              style={{
                marginBottom: '-20px',
                marginTop: '-12px',
                color: '#FFFFFF',
              }}
            />
          )}
          <CardContent>
            <Grid
              container
              item
              xs={12}
              style={{ marginBottom: '20px', justifyContent: 'flex-start' }}
            >
              <Typography
                variant="body2"
                color="white"
                style={{
                  marginLeft: '10px',
                  marginRight: '10px',
                  marginBottom: '20px',
                  justifyContent: 'flex-start',
                }}
                display="inline"
              >
                {item.itemDescription}
              </Typography>
            </Grid>
            <Grid container item xs={12} justifyContent="center" spacing={3}>
              <Grid container item xs={6} justifyContent="center">
                <Button
                  fullWidth
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
                  fullWidth
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
