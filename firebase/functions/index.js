const app = require('express')();
const functions = require('firebase-functions');

// const app = express();
// app.use(express.json());
// const auth = require('../util/auth');
// const {} = require('./APIs/users');
const { item, user, message, admin } = require('./APIs');
// require('dotenv').config();

// TODO: getAllItems
// needs to only retrieve 30 items at a time
// additional requests should query the next page of items
app.get('/getAllItems', item.getAllItems);

// TODO: getItem
// app.get('/getItem', getItem);
app.get('/getItem', item.getItem);
app.get('/editItem', item.editItem);
app.post('/addItem', item.addNewItem);
app.get('/reportItem', item.reportItem);

// USERS
app.post('/login', user.login);

const api = functions.https.onRequest(app);

module.exports = {
  api,
};
