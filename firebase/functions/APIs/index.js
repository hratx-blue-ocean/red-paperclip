// Items
const getAllItems = require('./Items/getAllItems');
const changeActiveStatus = require('./Items/changeActiveStatus');
const getItem = require('./Items/getItem');
const addNewItem = require('./Items/addNewItem');
const editItem = require('./Items/editItem');
const reportItem = require('./Items/reportItem');
const getItemsByCategory = require('./Items/getItemsByCategory');

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
  changeActiveStatus,
  getItemsByCategory,
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
