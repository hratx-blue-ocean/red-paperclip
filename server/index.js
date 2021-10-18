const app = require('express')();
const functions = require('../firebase/functions/node_modules/firebase-functions');
// const auth = require('../util/auth');
// const {} = require('./APIs/users');
const { getAllItems, getTest } = require('../firebase/functions/APIs/items');

app.get('/items', getAllItems);
app.get('/test', getTest);

const api = functions.https.onRequest(app);

module.exports = {
  api,
};
