import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Feed from './Feed/Feed';
import Admin from './Admin/Admin';
import Chat from './Chat/Chat';
import Profile from './Profile/Profile';

function App() {
  return (
    <main>
      <Header />
      <app>
        <Router>
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <Feed />
            </Route>
          </Switch>
        </Router>
      </app>
    </main>
  );
}

export default App;
