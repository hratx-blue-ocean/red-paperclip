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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // maxWidth: '50%',
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
  hover1: {
    color: '#161513',
    '&:hover': {
      color: '#f0CC71',
    },
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
}));

export default function ItemCard() {
  const classes = useStyles();
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
  const handleCardOpen = () => setCardOpen(true);
  const handleCardClose = () => setCardOpen(false);
  // report modal
  const [openReport, setReportOpen] = useState(false);
  const handleReportOpen = () => setReportOpen(true);
  const handleReportClose = () => setReportOpen(false);
  // handle report
  const [reported, setReported] = useState(false);
  const handleReport = () => setReported(true);

  // trade modal
  const [opentrade, setTradeOpen] = useState(false);
  const handleTradeOpen = () => setTradeOpen(true);
  const handleTradeClose = () => setTradeOpen(false);
  // handle trade
  const [trade, setTrade] = useState(false);
  const handleTrade = () => setTrade(true);

  return (
    <div className={classes.root}>
      <Modal open={openCard} onClose={handleCardClose}>
        <Box style={{ overflow: 'auto' }} sx={style}>
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
                // height="60%"
                position="relative"
                image="https://images.squarespace-cdn.com/content/v1/5acd0a3c8ab722892928be5a/1565878992439-2ER3KM60OHYNPNF2LPP3/8B059829-6D7F-424F-B9A7-4C44C112CFF9.jpg?format=2500w"
                style={{ objectFit: 'cover' }}
                alt="Axe Set"
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
                    Rustic Axe Set
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
                    style={{
                      marginLeft: '10px',
                      marginBottom: '20px',
                    }}
                    display="inline"
                  >
                    These beautiful axes were custom made in the heart of
                    Minnesota. I need to have more characters so I am typing. I
                    need to have more characters so I am typing. I need to have
                    more characters so I am typing. I need to have more
                    characters so I am typing. I need to have more characters so
                    I am typing. I need to have more characters so I am typing.
                    I need to have more characters so I am typing. I need to
                    have more characters so I am typing. I need to have more
                    characters so I am typing. I need to have more characters so
                    I am typing. I need to have more characters so I am typing.
                    I need to have more characters so I am typing. I need to
                    have more characters so I am typing. I need to have more
                    characters so I am typing. I need to have more characters so
                    I am typing. I need to have more characters so I am typing.
                    I need to have more characters so I am typing. I need to
                    have more characters so I am typing. I need to have more
                    characters so I am typing. I need to have more characters so
                    I am typing.
                  </Typography>
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  justifyContent="center"
                  spacing={3}
                >
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
        </Box>
      </Modal>

      <Modal open={openReport} onClose={handleReportClose}>
        <Box sx={style} style={{ backgroundColor: '#494D53', maxWidth: '25%' }}>
          <Grid container style={{ justifyContent: 'flex-end' }}>
            <IconButton onClick={handleReportClose}>
              <CloseIcon className={classes.hover3} style={{ fontSize: 45 }} />
            </IconButton>
          </Grid>
          {!reported && (
            <Grid
              container
              style={{ justifyContent: 'center', marginBottom: '40px' }}
              padding={1}
              spacing={5}
            >
              <Grid container item xs={9} justifyContent="space-evenly">
                <Button
                  fullWidth
                  color="sortButton"
                  variant="contained"
                  className={classes.hover2}
                  onClick={handleReport}
                >
                  Offensive Item
                </Button>
              </Grid>

              <Grid container item xs={9} justifyContent="space-evenly">
                <Button
                  fullWidth
                  color="sortButton"
                  variant="contained"
                  className={classes.hover2}
                  onClick={handleReport}
                >
                  Hazardous Item
                </Button>
              </Grid>

              <Grid container item xs={9} justifyContent="space-evenly">
                <Button
                  fullWidth
                  color="sortButton"
                  variant="contained"
                  className={classes.hover2}
                  onClick={handleReport}
                >
                  Stolen Item
                </Button>
              </Grid>

              <Grid container item xs={9} justifyContent="space-evenly">
                <Button
                  fullWidth
                  color="sortButton"
                  variant="contained"
                  className={classes.hover2}
                  onClick={handleReport}
                >
                  Illegal Item
                </Button>
              </Grid>

              <Grid container item xs={9} justifyContent="space-evenly">
                <Button
                  fullWidth
                  color="sortButton"
                  variant="contained"
                  className={classes.hover2}
                  onClick={handleReport}
                >
                  Other Prohibited Item
                </Button>
              </Grid>
            </Grid>
          )}
          {reported && (
            <Grid
              container
              style={{
                justifyContent: 'center',
                marginBottom: '182px',
                marginTop: '70px',
              }}
              padding={1}
              spacing={5}
            >
              <Grid container item xs={9} justifyContent="center">
                <Typography
                  // variant="h4"
                  style={{ color: '#F0CC71', fontSize: 35, fontWeight: 800 }}
                >
                  Thank you for your feedback!
                </Typography>
              </Grid>
            </Grid>
          )}
        </Box>
      </Modal>
      <Modal open={opentrade} onClose={handleTradeClose}>
        <Box sx={style} style={{ backgroundColor: '#494D53' }}>
          <Grid container style={{ justifyContent: 'flex-end' }}>
            <IconButton onClick={handleTradeClose}>
              <CloseIcon className={classes.hover3} style={{ fontSize: 45 }} />
            </IconButton>
          </Grid>
          {!trade && (
            <Grid
              container
              style={{
                justifyContent: 'center',
                marginBottom: '39px',
              }}
              padding={4}
            >
              <Grid
                item
                xs={5}
                container
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginBottom: '40px',
                }}
              >
                <Typography
                  style={{ color: '#FFFFFF', fontSize: 35, fontWeight: 800 }}
                >
                  My Item
                </Typography>
              </Grid>
              <Grid
                item
                xs={2}
                container
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '40px',
                }}
              >
                <CompareArrowsIcon
                  style={{ color: '#2C2C2C', fontSize: 100 }}
                />
              </Grid>
              <Grid
                item
                xs={5}
                container
                style={{
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  marginBottom: '40px',
                }}
              >
                <Typography
                  style={{ color: '#F0CC71', fontSize: 35, fontWeight: 800 }}
                >
                  This Item
                </Typography>
              </Grid>

              <Grid
                container
                item
                xs={6}
                style={{ justifyContent: 'center', marginTop: '10px' }}
              >
                <Button
                  fullWidth
                  color="sortButton"
                  variant="contained"
                  className={classes.hover2}
                  onClick={handleTrade}
                >
                  Submit Offer
                </Button>
              </Grid>
            </Grid>
          )}
          {trade && (
            <Grid
              container
              style={{
                justifyContent: 'center',
                marginBottom: '102px',
                marginTop: '42px',
                marginLeft: '46px',
                marginRight: '46px',
              }}
              padding={6}
            >
              <Grid container item xs={12} justifycontent="center">
                <Typography
                  // variant="h4"
                  style={{ color: '#F0CC71', fontSize: 35, fontWeight: 800 }}
                >
                  Your offer has been sent!
                </Typography>
              </Grid>
            </Grid>
          )}
        </Box>
      </Modal>
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
            height="45%"
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
                Rustic Axe Set
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
