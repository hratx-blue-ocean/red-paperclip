const app = require('express')();
const functions = require('firebase-functions');
const auth = require('../util/auth');
const { item, user, message, admin } = require('./APIs');

app.get('/getAllItems', item.getAllItems);

// USERS
app.post('/login', user.login);
app.post('/signup', user.signUp);
app.get('/user', auth, user.getUserDetail);
app.post('/user', auth, user.updateUserDetails);
app.post('/user/image', auth, user.uploadProfilePhoto);

const api = functions.https.onRequest(app);

module.exports = {
  api,
};
