import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import './Header.css';
import Logo from '../../../images/rpc.png';

const Header = () => (
  <div className="header">
    <IconButton>
      <PersonIcon className="header__icon" fontSize="large" />
    </IconButton>
    <img className="header__logo" src={Logo} alt="Red Paperclip Logo" />
    <IconButton>
      <ForumIcon className="header__icon" fontSize="large" />
    </IconButton>
  </div>
);

export default Header;
