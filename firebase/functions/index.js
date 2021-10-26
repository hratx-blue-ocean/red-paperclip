const express = require('express');
const app = require('express')();
const cors = require('cors');
const functions = require('firebase-functions');
const auth = require('../util/auth');
const { item, user, message, admin } = require('./APIs');

app.use(express.json());
app.use(cors());

// ITEMS
app.get('/getAllItems', item.getAllItems);
app.get('/getItem', item.getItem);
app.get('/getItems', item.getItems);
app.get('/editItem', item.editItem);
app.post('/addNewItem', item.addNewItem);
app.get('/changeActiveStatus', item.changeActiveStatus);
app.get('/getItemsByCategory', item.getItemsByCategory);

// USERS
app.post('/login', user.login);
app.post('/signup', user.signUp);
app.put('/editWatchList', user.editWatchList);
app.get('/user', auth, user.getUserDetail);
app.post('/user', auth, user.updateUserDetails);
app.post('/user/image', auth, user.uploadProfilePhoto);

// ADMINS
app.post('/reportItem', admin.reportItem);
app.put('/dismissReport', admin.dismissReport);
app.get('/getItemReports', admin.getItemReports);

// MESSAGES
app.get('/getChatRoom', message.getChatRoom);
app.get('/getAllChatRooms', message.getAllChatRooms);
app.post('/addChatMessage', message.addChatMessage);

const api = functions.https.onRequest(app);

module.exports = {
  api,
};
