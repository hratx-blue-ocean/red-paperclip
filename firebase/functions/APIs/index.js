// Items
const getAllItems = require('./Items/getAllItems');
const getItem = require('./Items/getItem');
const addNewItem = require('./Items/getItem');
const editItem = require('./Items/getItem');
const reportItem = require('./Items/reportItem');

// Users
const login = require('./Users/login');
const signUp = require('./Users/signUp');
const uploadProfilePhoto = require('./Users/uploadProfilePhoto');
const getUserDetail = require('./Users/getUserDetail');
const updateUserDetails = require('./Users/updateUserDetails');

const item = {
  getAllItems,
  getItem,
  addNewItem,
  editItem,
  reportItem,
};

const user = {
  login,
  signUp,
  uploadProfilePhoto,
  getUserDetail,
  updateUserDetails,
};

const message = {};

const admin = {};

module.exports = {
  item,
  user,
  message,
  admin,
};
