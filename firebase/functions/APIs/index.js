// Items
const getAllItems = require('./Items/getAllItems');

// Users
const login = require('./Users/login');
const signUp = require('./Users/signUp');

const item = {
  getAllItems,
};

const user = {
  login,
  signUp,
};

const message = {};

const admin = {};

module.exports = {
  item,
  user,
  message,
  admin,
};
