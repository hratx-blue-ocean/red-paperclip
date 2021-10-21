import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import MenuBar from './Header/MenuBar';
import Feed from './Feed/Feed';
import Admin from './Admin/Admin';
import Chat from './Chat/Chat';
import Profile from './Profile/Profile';

function App() {
  return (
    <>
      <main>
        <Router>
          <Container className="main">
            <MenuBar />
            <Container className="app">
              <Switch>
                <Route path="/profile" exact component={Profile} />
                <Route path="/chat" exact component={Chat} />
                <Route path="/admin" exact component={Admin} />
                <Route path="/" exact component={Feed} />
              </Switch>
            </Container>
          </Container>
        </Router>
      </main>
    </>
  );
}

export default App;
