const express = require('express');
const app = require('express')();
const functions = require('firebase-functions');
const auth = require('../util/auth');
const { item, user, message, admin } = require('./APIs');

app.use(express.json());

// ITEMS
app.get('/getAllItems', item.getAllItems);
app.get('/getItem', item.getItem);
app.get('/editItem', item.editItem);
app.post('/addNewItem', item.addNewItem);
app.get('/reportItem', item.reportItem);
app.get('/changeActiveStatus', item.changeActiveStatus);
app.get('/getItemsByCategory', item.getItemsByCategory);

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
