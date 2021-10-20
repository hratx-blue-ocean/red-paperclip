// Items
const getAllItems = require('./Items/getAllItems');
const changeActiveStatus = require('./Items/changeActiveStatus');
const getItem = require('./Items/getItem');
const addNewItem = require('./Items/getItem');
const editItem = require('./Items/getItem');
const reportItem = require('./Items/reportItem');
const getItemsByCategory = require('./Items/getItemsByCategory');

// Users
const login = require('./Users/login');
const signUp = require('./Users/signUp');

const item = {
  getAllItems,
  getItem,
  addNewItem,
  editItem,
  reportItem,
  changeActiveStatus,
  getItemsByCategory,
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
