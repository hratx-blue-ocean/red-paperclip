// Items
const getAllItems = require('./Items/getAllItems');

// Users
const login = require('./Users/login');
const signUp = require('./Users/signUp');
const uploadProfilePhoto = require('./Users/uploadProfilePhoto');
const getUserDetail = require('./Users/getUserDetail');
const updateUserDetails = require('./Users/updateUserDetails');

const item = {
  getAllItems,
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
