import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { makeStyles } from '@mui/styles';
import Hamburger from './Hamburger';
import { ItemsContext } from '../ItemsContext';

const useStyles = makeStyles({
  header: {
    backgroundColor: '#161513',
    color: 'black',
    boxShadow: '0px 0px 0px 0px',
  },
});

const Header = () => {
  const [auth, setAuth] = React.useState(false);
  const { isLoggedIn, isAdmin } = useContext(ItemsContext);
  const classes = useStyles();

  const colorsArr = [
    'Brown',
    'Black',
    'Purple',
    'Blue',
    'Green',
    'Yellow',
    'Orange',
    'Red',
    'White',
  ];

  const itemsArr = [
    'Spatula',
    'Lamp',
    'Mirror',
    'Chair',
    'Sofa',
    'House',
    'Pen',
    'Ball',
    'Desk',
  ];

  const random1 = Math.floor(Math.random() * 9);
  const random2 = Math.floor(Math.random() * 9);

  return (
    <div className="header">
      <AppBar
        position="fixed"
        style={{ backgroundColor: '#161513', color: 'white' }}
      >
        <Toolbar>
          <AttachFileIcon color="paperClip" />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Red Paperclip <CompareArrowsIcon />{' '}
            {`${colorsArr[random1]} ${itemsArr[random2]}`}
          </Typography>
          {auth && (
            <>
              <AccountCircleIcon />
              <Typography variant="h6">Welcome, user!</Typography>
            </>
          )}
          <Hamburger auth={auth} setAuth={setAuth} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
