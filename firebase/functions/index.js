const app = require('express')();
const functions = require('firebase-functions');
// const auth = require('../util/auth');
// const {} = require('./APIs/users');
const { item, user, message, admin } = require('./APIs');

// TODO: getAllItems
// needs to only retrieve 30 items at a time
// additional requests should query the next page of items
app.get('/getAllItems', item.getAllItems);

// TODO: getItem
// app.get('/getItem', getItem);

const api = functions.https.onRequest(app);

module.exports = {
  api,
};
