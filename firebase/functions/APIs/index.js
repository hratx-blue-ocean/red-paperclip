// Items
const getAllItems = require('./Items/getAllItems');

// Users
const login = require('./Users/login');

const item = {
  getAllItems,
};

const user = {
  login,
};

const message = {};

const admin = {};

module.exports = {
  item,
  user,
  message,
  admin,
};
